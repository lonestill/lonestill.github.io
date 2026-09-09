import latest from "../data/onyx-release.json";

const repo = "https://github.com/lonestill/onyx-launcher";
const version = latest.version;
const release = latest.releaseUrl;
const website = "https://lonestill.github.io";

const windows = latest.windowsInstallerUrl;
const portable = latest.windowsPortableUrl;
const appImage = latest.appImageUrl;
const linuxTar = latest.linuxTarUrl;
const deb = `${repo}/releases/download/v${version}/onyx-launcher_${version}_amd64.deb`;
const rpm = `${repo}/releases/download/v${version}/onyx-launcher-${version}.x86_64.rpm`;
const scoop = "https://github.com/lonestill/scoop-onyx";
const appImageHub = "https://appimage.github.io/Onyx_Launcher/";
const goodFirstIssues = `${repo}/issues?q=is%3Aissue%20is%3Aopen%20label%3A%22good%20first%20issue%22`;
const contributorGuide = `${repo}/blob/master/CONTRIBUTING.md`;

const features = [
  {
    mark: "01",
    title: "Onyx Probe: In-Engine FPS & 1% Lows",
    text: "A built-in Java agent hooks LWJGL/GLFW directly at bytecode level. Collects nanosecond-accurate frame times, average FPS, and stutters without external overlays or tools on macOS, Windows, and Linux."
  },
  {
    mark: "02",
    title: "Ghost Mode: Zero Gaming Overhead",
    text: "When Minecraft launches, Onyx releases its window, renderer, and GPU process from RAM. Zero unnecessary memory or CPU cycles consumed while you play."
  },
  {
    mark: "03",
    title: "Real-time Downloads with Speed & ETA",
    text: "Smooth download progress, moving-average transfer rate in MB/s, and accurate completion estimates for large modpacks, assets, and runtimes."
  },
  {
    mark: "04",
    title: "Modrinth Catalog & 5 Loaders",
    text: "Browse, install, and update modpacks and mods with one click. Native isolated support for Fabric, NeoForge, Forge, Quilt, and Vanilla."
  },
  {
    mark: "05",
    title: "Flight Recorder & Crash Diagnostics",
    text: "Automatic log analysis, memory tracking, GC pause detection, and Crash Bisect to identify conflicting mods across controlled launches."
  },
  {
    mark: "06",
    title: "World Guard & Safe Rollbacks",
    text: "Automatic safety snapshots before dangerous operations, OS trash integration, and transactional mod profile rollbacks to keep saves safe."
  }
];

const faqs = [
  {
    question: "How does Onyx record FPS and frame times?",
    answer:
      "Onyx bundles an in-house lightweight Java agent called Onyx Probe. When FPS capture is enabled, it instruments GLFW and LWJGL frame swaps at runtime, measuring nanosecond-precise frame intervals without requiring external software like PresentMon or MangoHud."
  },
  {
    question: "What is Ghost Mode?",
    answer:
      "When Minecraft launches, Ghost Mode automatically unloads the Onyx window, WebContents, and GPU processes from system memory. This ensures 100% of your RAM and GPU headroom remains available for Minecraft shaders and heavy modpacks."
  },
  {
    question: "Do I need to install Java manually?",
    answer:
      "No. Onyx automatically detects, downloads, and isolates the appropriate Eclipse Temurin runtime (Java 8, 17, or 21) required for your specific Minecraft version and mod loader."
  },
  {
    question: "How do I run the Linux AppImage?",
    answer:
      "Download the AppImage, make it executable, and run it. Alternatively, download the .deb or .rpm package for your Linux distribution.",
    command:
      `chmod +x Onyx-Launcher-${version}-x86_64.AppImage && ./Onyx-Launcher-${version}-x86_64.AppImage`
  },
  {
    question: "Does Onyx require an official Minecraft account?",
    answer:
      "You can sign in securely with your Microsoft account via OAuth Device Flow (Onyx never handles your password). Offline mode with custom skin support is also available for offline play."
  },
  {
    question: "Can I verify the binary downloads?",
    answer:
      "Yes. Every GitHub Release publishes SHA-256 checksums alongside every binary, and all builds are compiled transparently through public GitHub Actions CI."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Onyx Launcher",
  alternateName: "Onyx Launcher for Desktop",
  url: website,
  image: `${website}/social-card.png`,
  screenshot: [
    `${website}/home.png`,
    `${website}/library.png`,
    `${website}/discover.png`,
    `${website}/instance.png`,
    `${website}/settings.png`
  ],
  applicationCategory: "GameApplication",
  applicationSubCategory: "Desktop Minecraft launcher",
  operatingSystem: "Windows 10, Windows 11, Linux, macOS",
  softwareVersion: version,
  releaseNotes: release,
  downloadUrl: `${repo}/releases/latest`,
  license: `${repo}/blob/master/LICENSE`,
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD"
  },
  author: {
    "@type": "Person",
    name: "lonestill",
    url: "https://github.com/lonestill"
  },
  sameAs: [repo, release],
  featureList: [
    "Onyx Probe in-engine FPS & frame-time recording",
    "Ghost Mode zero gaming overhead",
    "Built-in Modrinth modpack discovery & installation",
    "Automatic Temurin Java runtime management",
    "Crash Bisect and Flight Recorder diagnostics",
    "World Guard snapshots and safe backups"
  ],
  description:
    "Open-source desktop Minecraft launcher with built-in runtime telemetry, Modrinth modpacks, automatic Java, Onyx Probe FPS recording, and Ghost Mode."
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c")
        }}
      />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Onyx Launcher home">
          <img src="/icon.png" width="34" height="34" alt="" />
          <span>ONYX</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#screens">Screens</a>
          <a href="#faq">FAQ</a>
          <a href="#download">Download</a>
          <a href={goodFirstIssues}>Good first issues</a>
          <a href={contributorGuide}>Contributing</a>
          <a href={repo}>GitHub</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow">
            <span className="statusDot" />
            Version {version} · Windows &amp; Linux
          </div>
          <h1>
            Minecraft,
            <br />
            without the <em>launcher bloat.</em>
          </h1>
          <p className="lede">
            A fast, open-source launcher built with React and Electron. Featuring in-engine
            telemetry via Onyx Probe, zero-overhead Ghost Mode, native Modrinth browsing, and safe world backups.
          </p>
          <div className="heroActions">
            <a className="button primary" href={windows}>
              Download for Windows
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button secondary" href={appImage}>
              Get AppImage (Linux)
            </a>
          </div>
          <p className="microcopy">
            MIT licensed · SHA-256 verified · 54 test suites · 100% Free &amp; Open Source
          </p>
        </div>

        <div className="heroVisual">
          <div className="window">
            <div className="windowBar">
              <div><span /><span /><span /></div>
              <small>ONYX LAUNCHER</small>
              <b>{version}</b>
            </div>
            <img src="/home.png" alt="Onyx Launcher showing the modern control center dashboard" />
          </div>
          <div className="floatCard loaderCard">
            <small>LOADERS</small>
            <strong>Fabric · NeoForge · Forge</strong>
            <strong>Quilt · Vanilla</strong>
          </div>
          <div className="floatCard javaCard">
            <span>✓</span>
            <div>
              <small>TELEMETRY</small>
              <strong>Onyx Probe Ready</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="shell proofGrid">
          <div><strong>5</strong><span>game loaders</span></div>
          <div><strong>0 MB</strong><span>RAM in Ghost Mode</span></div>
          <div><strong>54</strong><span>automated test suites</span></div>
          <div><strong>MIT</strong><span>open-source license</span></div>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="sectionHead">
          <p className="kicker">BUILT FOR REAL PERFORMANCE</p>
          <h2>Advanced diagnostics. Zero runtime overhead.</h2>
          <p>
            Onyx is engineered to give you complete visibility into game performance
            and mod stability without slowing down your system.
          </p>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article className="feature" key={feature.mark}>
              <span>{feature.mark}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase" id="screens">
        <div className="shell">
          <div className="sectionHead splitHead">
            <div>
              <p className="kicker">A CLEAN INTERFACE</p>
              <h2>Everything for your game. Nothing in the way.</h2>
            </div>
            <p>
              Compact, fast, and responsive: instances, modpacks, performance curves,
              and instance recovery are always one click away.
            </p>
          </div>
          <div className="screenGrid">
            <figure className="screen large">
              <img src="/instance.png" alt="Onyx Launcher instance management screen" />
              <figcaption><span>PERFORMANCE &amp; TELEMETRY</span><b>In-engine FPS curves, 1% lows, and Flight Recorder metrics.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/home.png" alt="Onyx Launcher Control Center dashboard" />
              <figcaption><span>CONTROL CENTER</span><b>Quick launch, active profiles, and session analytics.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/discover.png" alt="Onyx Launcher Modrinth discovery catalog" />
              <figcaption><span>DISCOVER</span><b>Browse and install Modrinth modpacks and mods directly.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/library.png" alt="Onyx Launcher content library" />
              <figcaption><span>LIBRARY</span><b>Separate tabs for Fabric, NeoForge, Quilt, and Forge.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/settings.png" alt="Onyx Launcher settings screen" />
              <figcaption><span>SETTINGS</span><b>Streamlined configuration without marketing clutter.</b></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section shell safety">
        <div className="safetyCopy">
          <p className="kicker">DIAGNOSTICS, NOT GUESSWORK</p>
          <h2>When a modpack breaks, find the exact cause.</h2>
          <p>
            Onyx continuously monitors JVM health and presentation timing.
            Identify memory leaks, micro-stutters, and conflicting mod IDs in seconds.
          </p>
          <ul>
            <li><span>↳</span> In-engine FPS &amp; 1% low capture via Onyx Probe JVM agent</li>
            <li><span>↳</span> Crash Bisect across controlled binary search launches</li>
            <li><span>↳</span> Flight Recorder for CPU load, memory RSS, and GC pause spikes</li>
            <li><span>↳</span> Redacted support bundles for safe troubleshooting</li>
          </ul>
        </div>
        <div className="terminal" aria-label="Example diagnostic output">
          <div className="terminalTop"><span>ONYX / PREFLIGHT</span><b>PASS</b></div>
          <pre>{`instance       Better Adventures
minecraft      1.21.1
loader         Fabric 0.16.10
java           Temurin 21.0.7
probe          Onyx Probe (GLFW hooked)
memory         6144 MB
world guard    snapshot ready
mod scan       148 checked

✓ no blocking conflicts found
→ ready to launch (Ghost Mode armed)`}</pre>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="shell">
          <div className="sectionHead splitHead">
            <div>
              <p className="kicker">BEFORE YOU DOWNLOAD</p>
              <h2>Clear answers, no marketing fluff.</h2>
            </div>
            <p>
              Platform support, Java, licensing, integrity, and storage explained upfront.
            </p>
          </div>
          <div className="faqGrid">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
                {faq.command && <code>{faq.command}</code>}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="download" id="download">
        <div className="shell">
          <div className="sectionHead">
            <p className="kicker">DOWNLOAD ONYX {version}</p>
            <h2>Pick your platform. Play without bloat.</h2>
          </div>
          <div className="downloadGrid">
            <article>
              <div className="platformIcon">▣</div>
              <small>WINDOWS 10 / 11 · X64</small>
              <h3>Windows</h3>
              <p>Installer setup for automatic integration, or standalone portable executable.</p>
              <a className="button primary" href={windows}>Download installer <span>↘</span></a>
              <a className="textLink" href={portable}>Portable .exe</a>
              <a className="textLink" href={scoop}>Install with Scoop</a>
            </article>
            <article>
              <div className="platformIcon">◆</div>
              <small>MODERN LINUX · X64</small>
              <h3>Linux</h3>
              <p>Run universal AppImage directly, or install via native packages.</p>
              <a className="button primary" href={appImage}>Download AppImage <span>↘</span></a>
              <a className="textLink" href={deb}>Debian / Ubuntu (.deb)</a>
              <a className="textLink" href={rpm}>Fedora / RHEL (.rpm)</a>
              <a className="textLink" href={linuxTar}>Portable .tar.gz</a>
            </article>
            <article className="sourceCard">
              <div className="platformIcon">&lt;/&gt;</div>
              <small>MIT LICENSED · 54 TESTS</small>
              <h3>Source</h3>
              <p>Inspect the code, verify CI build workflows, or contribute a feature.</p>
              <a className="button secondary" href={repo}>View on GitHub</a>
              <a className="textLink" href={`${release}#assets`}>v{version} Checksums &amp; notes</a>
              <a className="textLink" href={goodFirstIssues}>Good first issues</a>
              <a className="textLink" href={contributorGuide}>Contributing guide</a>
            </article>
          </div>
          <p className="unsignedNote">
            Windows builds are currently unsigned, so SmartScreen may show a warning.
            Verify the published SHA-256 checksum before running.
          </p>
        </div>
      </section>

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
            <a href={repo}>GitHub</a>
            <a href={release}>Release {version}</a>
            <a href={goodFirstIssues}>Good first issues</a>
            <a href={contributorGuide}>Contributing</a>
            <a href={`${repo}/blob/master/SECURITY.md`}>Security</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
