import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const cardWidth = 1200;
const cardHeight = 630;
const screenshotWidth = 610;
const screenshotHeight = 381;

const screenshotMask = Buffer.from(`
  <svg width="${screenshotWidth}" height="${screenshotHeight}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${screenshotWidth}" height="${screenshotHeight}" rx="18" fill="#fff"/>
  </svg>
`);

const screenshot = await sharp(path.join(publicDir, "home.png"))
  .resize(screenshotWidth, screenshotHeight, { fit: "cover", position: "centre" })
  .composite([{ input: screenshotMask, blend: "dest-in" }])
  .png()
  .toBuffer();

const icon = await sharp(path.join(publicDir, "icon.png"))
  .resize(76, 76)
  .png()
  .toBuffer();

const background = Buffer.from(`
  <svg width="${cardWidth}" height="${cardHeight}" viewBox="0 0 ${cardWidth} ${cardHeight}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#111512"/>
        <stop offset="0.55" stop-color="#090b0a"/>
        <stop offset="1" stop-color="#050706"/>
      </linearGradient>
      <radialGradient id="glow" cx="0" cy="0" r="1" gradientTransform="translate(1000 100) rotate(135) scale(520 420)">
        <stop offset="0" stop-color="#a9f257" stop-opacity=".25"/>
        <stop offset=".62" stop-color="#77bd33" stop-opacity=".06"/>
        <stop offset="1" stop-color="#77bd33" stop-opacity="0"/>
      </radialGradient>
      <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M32 0H0V32" fill="none" stroke="#b8f85b" stroke-opacity=".035"/>
      </pattern>
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="18"/>
      </filter>
    </defs>

    <rect width="${cardWidth}" height="${cardHeight}" fill="url(#bg)"/>
    <rect width="${cardWidth}" height="${cardHeight}" fill="url(#glow)"/>
    <rect width="${cardWidth}" height="${cardHeight}" fill="url(#grid)"/>
    <circle cx="1030" cy="92" r="122" fill="#a9f257" opacity=".08" filter="url(#shadow)"/>

    <rect x="534" y="92" width="622" height="393" rx="24" fill="#a9f257" opacity=".24"/>
    <rect x="537" y="95" width="616" height="387" rx="21" fill="#171d18" stroke="#b8f85b" stroke-opacity=".32"/>

    <text x="168" y="94" fill="#ffffff" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="42" font-weight="800" letter-spacing="1">ONYX</text>
    <text x="168" y="123" fill="#a9f257" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="3">MINECRAFT LAUNCHER</text>

    <text x="70" y="220" fill="#ffffff" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="49" font-weight="800">Play your way.</text>
    <text x="70" y="272" fill="#d7ddd8" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="29" font-weight="600">Keep every instance safe.</text>

    <g font-family="Inter, Segoe UI, Arial, sans-serif" font-size="17" font-weight="650">
      <rect x="70" y="322" width="212" height="44" rx="22" fill="#a9f257" fill-opacity=".11" stroke="#a9f257" stroke-opacity=".32"/>
      <circle cx="94" cy="344" r="5" fill="#a9f257"/>
      <text x="108" y="350" fill="#edf3ee">Modrinth modpacks</text>

      <rect x="294" y="322" width="170" height="44" rx="22" fill="#a9f257" fill-opacity=".11" stroke="#a9f257" stroke-opacity=".32"/>
      <circle cx="318" cy="344" r="5" fill="#a9f257"/>
      <text x="332" y="350" fill="#edf3ee">Automatic Java</text>

      <rect x="70" y="380" width="194" height="44" rx="22" fill="#a9f257" fill-opacity=".11" stroke="#a9f257" stroke-opacity=".32"/>
      <circle cx="94" cy="402" r="5" fill="#a9f257"/>
      <text x="108" y="408" fill="#edf3ee">Crash diagnostics</text>

      <rect x="276" y="380" width="172" height="44" rx="22" fill="#a9f257" fill-opacity=".11" stroke="#a9f257" stroke-opacity=".32"/>
      <circle cx="300" cy="402" r="5" fill="#a9f257"/>
      <text x="314" y="408" fill="#edf3ee">Safe backups</text>
    </g>

    <line x1="70" y1="500" x2="1130" y2="500" stroke="#ffffff" stroke-opacity=".1"/>
    <text x="70" y="553" fill="#a9f257" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="23" font-weight="750">lonestill.github.io</text>
    <text x="1130" y="553" text-anchor="end" fill="#9ca59e" font-family="Inter, Segoe UI, Arial, sans-serif" font-size="18" font-weight="600">Open source · Windows &amp; Linux</text>
  </svg>
`);

await sharp(background)
  .composite([
    { input: icon, left: 70, top: 55 },
    { input: screenshot, left: 540, top: 98 }
  ])
  .png({ compressionLevel: 9, palette: true })
  .toFile(path.join(publicDir, "social-card.png"));

console.log("Generated public/social-card.png (1200x630)");
