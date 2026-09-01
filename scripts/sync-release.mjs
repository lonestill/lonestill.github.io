import { readFile, writeFile } from "node:fs/promises";

const apiUrl = "https://api.github.com/repos/lonestill/onyx-launcher/releases/latest";
const response = await fetch(apiUrl, {
  headers: {
    Accept: "application/vnd.github+json",
    "User-Agent": "onyx-launcher-site"
  }
});

if (!response.ok) {
  throw new Error(`GitHub release request failed with ${response.status}`);
}

const release = await response.json();
const version = String(release.tag_name || "").replace(/^v/, "");
const assets = Array.isArray(release.assets) ? release.assets : [];

function findAsset(pattern, label) {
  const asset = assets.find((candidate) => pattern.test(String(candidate.name || "")));
  if (!asset?.browser_download_url) {
    throw new Error(`Latest release is missing the ${label} asset`);
  }
  return asset;
}

if (!/^\d+\.\d+\.\d+$/.test(version)) {
  throw new Error(`Unexpected release tag: ${release.tag_name}`);
}

const windowsInstaller = findAsset(/^Onyx\.Launcher\.Setup\..+\.exe$/i, "Windows installer");
const windowsPortable = findAsset(/^Onyx\.Launcher\.(?!Setup\.).+\.exe$/i, "portable Windows executable");
const appImage = findAsset(/^Onyx-Launcher-.+-x86_64\.AppImage$/i, "Linux AppImage");
const linuxTar = findAsset(/^Onyx-Launcher-.+-linux-x64\.tar\.gz$/i, "Linux tar archive");
const published = new Date(release.published_at);

if (Number.isNaN(published.valueOf())) {
  throw new Error("Latest release has an invalid publication date");
}

const releaseData = {
  version,
  publishedLabel: new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(published),
  releaseUrl: release.html_url,
  windowsInstallerUrl: windowsInstaller.browser_download_url,
  windowsPortableUrl: windowsPortable.browser_download_url,
  appImageUrl: appImage.browser_download_url,
  linuxTarUrl: linuxTar.browser_download_url
};

await writeFile("data/onyx-release.json", `${JSON.stringify(releaseData, null, 2)}\n`);

const padPath = "public/pad/onyx-launcher.xml";
let pad = await readFile(padPath, "utf8");

function replaceTag(tag, value) {
  const pattern = new RegExp(`(<${tag}>)[\\s\\S]*?(</${tag}>)`);
  if (!pattern.test(pad)) throw new Error(`PAD file is missing ${tag}`);
  pad = pad.replace(pattern, `$1${value}$2`);
}

replaceTag("Program_Version", version);
replaceTag("Program_Release_Month", String(published.getUTCMonth() + 1));
replaceTag("Program_Release_Day", String(published.getUTCDate()));
replaceTag("Program_Release_Year", String(published.getUTCFullYear()));
replaceTag("File_Size_Bytes", String(windowsInstaller.size));
replaceTag("File_Size_K", String(Math.round(Number(windowsInstaller.size) / 1024)));
replaceTag("File_Size_MB", (Number(windowsInstaller.size) / 1024 / 1024).toFixed(2));
replaceTag("Primary_Download_URL", releaseData.windowsInstallerUrl);
replaceTag("Secondary_Download_URL", releaseData.windowsPortableUrl);
replaceTag("Additional_Download_URL_1", releaseData.appImageUrl);
replaceTag("Additional_Download_URL_2", releaseData.linuxTarUrl);

await writeFile(padPath, pad);
console.log(`Synced website release metadata to Onyx Launcher ${version}`);
