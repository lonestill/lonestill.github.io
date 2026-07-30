import type { Metadata } from "next";

const repo = "https://github.com/lonestill/onyx-launcher";
const release = `${repo}/releases/tag/v1.6.3`;
const website = "https://lonestill.github.io";
const articleUrl = `${website}/blog/onyx-launcher-1-6-3`;
const windows =
  `${repo}/releases/download/v1.6.3/Onyx.Launcher.Setup.1.6.3.exe`;
const appImage =
  `${repo}/releases/download/v1.6.3/Onyx-Launcher-1.6.3-x86_64.AppImage`;

export const metadata: Metadata = {
  title: "Onyx Launcher 1.6.3 for Windows and Linux",
  description:
    "Meet Onyx Launcher 1.6.3, an open-source desktop Minecraft launcher with isolated instances, Modrinth integration, automatic Java, diagnostics, and safer backups.",
  alternates: {
    canonical: "/blog/onyx-launcher-1-6-3"
  },
  openGraph: {
    title: "Onyx Launcher 1.6.3 for Windows and Linux",
    description:
      "An open-source desktop Minecraft launcher focused on clean instances, Modrinth content, automatic Java, useful diagnostics, and safer worlds.",
    url: articleUrl,
    type: "article",
    publishedTime: "2026-07-30T10:02:11Z",
    modifiedTime: "2026-07-30T12:20:00Z",
    images: [
      {
        url: `${website}/social-card.png`,
        width: 1200,
        height: 630,
        alt: "Onyx Launcher running on Windows and Linux"
      }
    ]
  }
};

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Onyx Launcher 1.6.3: an open-source Minecraft launcher for Windows and Linux",
  description:
    "A closer look at Onyx Launcher 1.6.3, its isolated instances, Modrinth integration, automatic Java, diagnostics, and world-safety tools.",
  image: `${website}/social-card.png`,
  datePublished: "2026-07-30T10:02:11Z",
  dateModified: "2026-07-30T12:20:00Z",
  author: {
    "@type": "Person",
    name: "lonestill",
    url: "https://github.com/lonestill"
  },
  mainEntityOfPage: articleUrl,
  about: {
    "@type": "SoftwareApplication",
    name: "Onyx Launcher",
    applicationCategory: "GameApplication",
    operatingSystem: "Windows 10, Windows 11, Linux",
    softwareVersion: "1.6.3",
    license: "https://opensource.org/license/mit"
  }
};

export default function ReleaseStory() {
  return (
    <main className="storyPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c")
        }}
      />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="/" aria-label="Onyx Launcher home">
          <img src="/icon.png" width="34" height="34" alt="" />
          <span>ONYX</span>
        </a>
        <div className="navLinks">
          <a href="/">Overview</a>
          <a href="/press">Press kit</a>
          <a href="/#download">Download</a>
          <a href={repo}>GitHub</a>
        </div>
      </nav>

      <article>
        <header className="storyHero shell">
          <p className="kicker">RELEASE 1.6.3 · JULY 30, 2026</p>
          <h1>
            A desktop Minecraft launcher built for the moments
            <em> after you click Play.</em>
          </h1>
          <p className="lede">
            Onyx Launcher is an open-source Windows and Linux app for isolated
            instances, Modrinth content, automatic Java, actionable crash
            diagnostics, and safer world backups.
          </p>
          <div className="heroActions">
            <a className="button primary" href={windows}>
              Download for Windows
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button secondary" href={appImage}>Get the AppImage</a>
          </div>
          <div className="storyMeta" aria-label="Release details">
            <span>MIT licensed</span>
            <span>TypeScript + Electron</span>
            <span>Windows x64 + Linux x64</span>
          </div>
        </header>

        <figure className="storyLead shell">
          <img
            src="/home.png"
            width="1600"
            height="1000"
            alt="Onyx Launcher home dashboard showing Minecraft instances and recent activity"
          />
          <figcaption>The English home dashboard in Onyx Launcher 1.6.3.</figcaption>
        </figure>

        <div className="storyBody shell">
          <aside className="storyAside">
            <p className="kicker">IN THIS RELEASE</p>
            <a href="#why">Why Onyx</a>
            <a href="#workflow">The daily workflow</a>
            <a href="#diagnostics">Diagnostics and safety</a>
            <a href="#quick-start">Quick start</a>
            <a href="#trust">Trust boundaries</a>
          </aside>

          <div className="storyProse">
            <section id="why">
              <h2>Why build another Minecraft launcher?</h2>
              <p>
                Installing a game is the easy part. The friction appears later:
                one modpack needs a different Java version, a loader update breaks
                a working instance, a world changes after an experiment, or a crash
                log says plenty without explaining what to try next.
              </p>
              <p>
                Onyx treats those operational details as the product. Every
                Minecraft instance keeps its own worlds, mods, loader, memory,
                Java, and launch settings. That separation makes experiments easier
                to understand and reduces the chance that a change intended for one
                pack quietly affects another.
              </p>
            </section>

            <div className="storyPoints" aria-label="Onyx Launcher highlights">
              <div><b>Isolated instances</b><span>Separate content, runtime, and settings per installation.</span></div>
              <div><b>Modrinth built in</b><span>Find and install modpacks and mods without a browser handoff.</span></div>
              <div><b>Managed Java</b><span>Select Eclipse Temurin 8, 17, or 21 for the game version.</span></div>
              <div><b>Safer changes</b><span>Snapshot worlds and restore deliberately when experiments go wrong.</span></div>
            </div>

            <section id="workflow">
              <h2>A focused daily workflow</h2>
              <p>
                The launcher supports Vanilla, Fabric, Quilt, Forge, and NeoForge.
                Modrinth discovery lives beside the instance library, so a player
                can inspect content, install it, and return to the same instance
                context. Onyx also chooses an appropriate Eclipse Temurin runtime
                instead of requiring users to match Java generations by hand.
              </p>
              <figure>
                <img
                  src="/discover.png"
                  width="1600"
                  height="1000"
                  alt="Modrinth discovery catalog inside Onyx Launcher"
                />
                <figcaption>Modrinth discovery is part of the launcher workflow.</figcaption>
              </figure>
            </section>

            <section id="diagnostics">
              <h2>Crashes should lead to a next step</h2>
              <p>
                Onyx collects launch output and presents it as a diagnostic path,
                not just a wall of text. Crash Bisect can help narrow down a
                problematic content set, while performance recordings make slow or
                unstable sessions easier to investigate. Those tools are designed
                to preserve evidence before a user starts changing things.
              </p>
              <p>
                World snapshots, controlled restoration, portable backups, and
                operating-system trash provide a second line of defense. They do
                not replace a proper backup strategy, but they make common modding
                mistakes less destructive.
              </p>
            </section>

            <section id="quick-start">
              <h2>Quick start</h2>
              <p>
                Windows users can choose the installer or a portable executable.
                Linux users can run the AppImage directly or download the portable
                tar.gz archive. The release includes separate SHA-256 checksum files
                for both platforms.
              </p>
              <div className="quickStartGrid">
                <div>
                  <small>LINUX APPIMAGE</small>
                  <pre><code>{`chmod +x Onyx-Launcher-1.6.3-x86_64.AppImage
./Onyx-Launcher-1.6.3-x86_64.AppImage`}</code></pre>
                  <a href={appImage}>Download the AppImage →</a>
                </div>
                <div>
                  <small>WINDOWS WITH SCOOP</small>
                  <pre><code>{`scoop bucket add onyx https://github.com/lonestill/scoop-onyx
scoop install onyx/onyx-launcher`}</code></pre>
                  <a href={windows}>Download the installer →</a>
                </div>
              </div>
            </section>

            <section id="trust">
              <h2>Clear trust boundaries</h2>
              <p>
                The source code, issue tracker, release history, and build workflows
                are public under the MIT license. Onyx uses Microsoft&apos;s
                device-code flow, so the launcher does not receive a player&apos;s
                Microsoft password. It does not redistribute Minecraft, bypass its
                license, or claim affiliation with Microsoft, Mojang Studios, or
                Modrinth.
              </p>
              <p>
                Windows builds are currently unsigned, so Microsoft SmartScreen may
                show a warning. Verify the published checksum before running a
                download. A licensed Microsoft account is required for the full
                Minecraft: Java Edition experience; the official demo can run
                without an account.
              </p>
              <div className="storyCta">
                <div>
                  <small>SOURCE, ISSUES, AND CHANGELOG</small>
                  <h3>Inspect it before you install it.</h3>
                </div>
                <div>
                  <a className="button primary" href={repo}>View source</a>
                  <a className="button secondary" href={release}>Release 1.6.3</a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </article>

      <footer>
        <div className="shell footerInner">
          <div className="brand">
            <img src="/icon.png" width="30" height="30" alt="" />
            <span>ONYX</span>
          </div>
          <p>
            Independent and open source. Not affiliated with Microsoft, Mojang Studios,
            or Modrinth. Minecraft is a trademark of Microsoft.
          </p>
          <div>
            <a href="/">Overview</a>
            <a href="/press">Press kit</a>
            <a href={release}>Release 1.6.3</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
