import type { Metadata } from "next";
import latest from "../../data/onyx-release.json";

const repo = "https://github.com/lonestill/onyx-launcher";
const release = latest.releaseUrl;
const website = "https://lonestill.github.io";
const appImage = latest.appImageUrl;
const appImageHub = "https://appimage.github.io/Onyx_Launcher/";
const pad = `${website}/pad/onyx-launcher.xml`;
const windows = latest.windowsInstallerUrl;

export const metadata: Metadata = {
  title: "Press kit — Onyx Launcher",
  description:
    "Verified facts, English screenshots, artwork, release links, and contact details for coverage of the Onyx Launcher desktop app.",
  alternates: {
    canonical: "/press"
  },
  openGraph: {
    title: "Onyx Launcher press kit",
    description:
      "Verified facts, English screenshots, artwork, and release links for an open-source desktop Minecraft launcher.",
    url: `${website}/press`,
    type: "website",
    images: [
      {
        url: `${website}/social-card.png`,
        width: 1200,
        height: 630,
        alt: "Onyx Launcher on Windows and Linux"
      }
    ]
  }
};

const facts = [
  ["Latest release", `${latest.version} · ${latest.publishedLabel}`],
  ["Platforms", "Windows 10/11 and modern x64 Linux"],
  ["License", "MIT"],
  ["Technology", "Electron, React, TypeScript"],
  ["Content source", "Modrinth"],
  ["Authentication", "Microsoft device-code flow"],
  ["Game loaders", "Vanilla, Fabric, Quilt, Forge, NeoForge"],
  ["Managed Java", "Eclipse Temurin 8, 17, and 21"]
];

const screenshots = [
  {
    file: "home.png",
    title: "Home dashboard",
    alt: "Onyx Launcher home dashboard with instances and recent activity"
  },
  {
    file: "instance.png",
    title: "Instance control",
    alt: "Onyx Launcher instance management screen"
  },
  {
    file: "discover.png",
    title: "Modrinth discovery",
    alt: "Onyx Launcher Modrinth discovery catalog"
  },
  {
    file: "library.png",
    title: "Content library",
    alt: "Onyx Launcher installed content library"
  }
];

export default function PressKit() {
  return (
    <main className="pressPage">
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Onyx Launcher home">
          <img src="/icon.png" width="34" height="34" alt="" />
          <span>ONYX</span>
        </a>
        <div className="navLinks">
          <a href="/">Overview</a>
          <a href="/blog/onyx-launcher-1-6-3">Release story</a>
          <a href="/#download">Download</a>
          <a href={repo}>GitHub</a>
        </div>
      </nav>

      <header className="pressHero shell">
        <div>
          <p className="kicker">PRESS &amp; CREATOR RESOURCES</p>
          <h1>
            The useful facts,
            <br />
            <em>ready to publish.</em>
          </h1>
          <p className="lede">
            Current release links, verified project details, English screenshots,
            and reusable artwork for editorial coverage of Onyx Launcher.
          </p>
          <div className="heroActions">
            <a className="button primary" href={release}>View release {latest.version}</a>
            <a className="button secondary" href="mailto:admin@lonestill.uk">
              Contact the developer
            </a>
          </div>
        </div>
        <a className="pressCard" href="/social-card.png" download>
          <img
            src="/social-card.png"
            width="1200"
            height="630"
            alt="Onyx Launcher press card with Windows and Linux screenshots"
          />
          <span>Download social card · PNG · 1200 × 630</span>
        </a>
      </header>

      <section className="pressSection shell">
        <div className="pressSectionHead">
          <p className="kicker">PROJECT AT A GLANCE</p>
          <h2>Verified facts</h2>
        </div>
        <dl className="factGrid">
          {facts.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
        <p className="factNote">
          Onyx is independent software. It does not distribute Minecraft, bypass
          licensing, or claim affiliation with Microsoft, Mojang Studios, or Modrinth.
        </p>
      </section>

      <section className="pressSection pressCopy">
        <div className="shell">
          <div className="pressSectionHead">
            <p className="kicker">COPY-READY SUMMARY</p>
            <h2>Describe it accurately</h2>
          </div>
          <div className="copyGrid">
            <article>
              <small>ONE SENTENCE</small>
              <p>
                Onyx Launcher is an MIT-licensed desktop Minecraft launcher for
                Windows and Linux with isolated instances, Modrinth integration,
                automatic Java, crash diagnostics, and safer world backups.
              </p>
            </article>
            <article>
              <small>SHORT DESCRIPTION</small>
              <p>
                Onyx Launcher is a Windows and Linux desktop app that keeps Minecraft
                instances isolated and gives players built-in Modrinth discovery,
                automatic Eclipse Temurin management, controlled mod bisecting,
                performance diagnostics, world snapshots, and portable backups. Its
                source and release workflows are public, and every release includes
                SHA-256 checksums.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pressSection shell">
        <div className="pressSectionHead">
          <p className="kicker">ENGLISH INTERFACE</p>
          <h2>Screenshots</h2>
          <p>Open or download the full-resolution PNG files. No captions are baked in.</p>
        </div>
        <div className="pressScreens">
          {screenshots.map((shot) => (
            <figure key={shot.file}>
              <a href={`/${shot.file}`} download>
                <img src={`/${shot.file}`} alt={shot.alt} />
              </a>
              <figcaption>
                <b>{shot.title}</b>
                <a href={`/${shot.file}`} download>Download PNG</a>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="pressSection pressLinks">
        <div className="shell">
          <div className="pressSectionHead">
            <p className="kicker">PRIMARY LINKS</p>
            <h2>Use the canonical sources</h2>
          </div>
          <div className="resourceGrid">
            <a href={website}><small>WEBSITE</small><b>lonestill.github.io</b></a>
            <a href={repo}><small>SOURCE</small><b>GitHub repository</b></a>
            <a href={release}><small>RELEASE NOTES</small><b>Onyx {latest.version}</b></a>
            <a href={windows}><small>WINDOWS</small><b>Installer</b></a>
            <a href={appImage}><small>LINUX</small><b>AppImage</b></a>
            <a href={appImageHub}><small>CATALOG</small><b>AppImageHub</b></a>
            <a href={`${release}#assets`}><small>INTEGRITY</small><b>SHA-256 checksums</b></a>
            <a href={pad}><small>DIRECTORIES</small><b>PAD metadata</b></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerInner">
          <div className="brand">
            <img src="/icon.png" width="30" height="30" alt="" />
            <span>ONYX</span>
          </div>
          <p>
            For corrections, technical questions, review coordination, or additional
            assets, contact admin@lonestill.uk.
          </p>
          <div>
            <a href="/">Overview</a>
            <a href="/blog/onyx-launcher-1-6-3">Release story</a>
            <a href="/feed.xml">RSS</a>
            <a href={repo}>GitHub</a>
            <a href="mailto:admin@lonestill.uk">Email</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
