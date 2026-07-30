const repo = "https://github.com/lonestill/onyx-launcher";
const release = `${repo}/releases/tag/v1.6.3`;
const windows =
  `${repo}/releases/download/v1.6.3/Onyx.Launcher.Setup.1.6.3.exe`;
const portable =
  `${repo}/releases/download/v1.6.3/Onyx.Launcher.1.6.3.exe`;
const appImage =
  `${repo}/releases/download/v1.6.3/Onyx-Launcher-1.6.3-x86_64.AppImage`;
const linuxTar =
  `${repo}/releases/download/v1.6.3/Onyx-Launcher-1.6.3-linux-x64.tar.gz`;
const scoop = "https://github.com/lonestill/scoop-onyx";

const features = [
  {
    mark: "01",
    title: "Instances stay isolated",
    text: "Every world, loader, Java runtime, memory profile, and launch option stays attached to the instance it belongs to."
  },
  {
    mark: "02",
    title: "Modrinth is built in",
    text: "Search modpacks and mods, inspect compatibility, install updates with previews, and keep your library organized."
  },
  {
    mark: "03",
    title: "Java takes care of itself",
    text: "Onyx selects and installs Eclipse Temurin 8, 17, or 21 for the Minecraft version you want to run."
  },
  {
    mark: "04",
    title: "Failures leave evidence",
    text: "Crash Bisect, log analysis, Flight Recorder, and support bundles turn a broken launch into something you can diagnose."
  },
  {
    mark: "05",
    title: "Worlds get guard rails",
    text: "World Guard snapshots, safe restoration, operating-system trash, and portable backups reduce destructive mistakes."
  },
  {
    mark: "06",
    title: "No mystery binaries",
    text: "The source is MIT licensed, releases include SHA-256 checksums, and builds run in public CI for Windows and Linux."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Onyx Launcher",
  applicationCategory: "GameApplication",
  operatingSystem: "Windows 10, Windows 11, Linux",
  softwareVersion: "1.6.3",
  license: "https://opensource.org/license/mit",
  downloadUrl: release,
  codeRepository: repo,
  description:
    "Open-source Minecraft launcher with isolated instances, Modrinth integration, automatic Java, crash diagnostics, and safe backups."
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Onyx Launcher home">
          <img src="/icon.png" width="34" height="34" alt="" />
          <span>ONYX</span>
        </a>
        <div className="navLinks">
          <a href="#features">Features</a>
          <a href="#screens">Screens</a>
          <a href="#download">Download</a>
          <a href={repo}>GitHub</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow">
            <span className="statusDot" />
            Version 1.6.3 · Windows &amp; Linux
          </div>
          <h1>
            Minecraft,
            <br />
            without the <em>launcher friction.</em>
          </h1>
          <p className="lede">
            A focused, open-source launcher for clean instances, Modrinth content,
            automatic Java, useful diagnostics, and safer worlds.
          </p>
          <div className="heroActions">
            <a className="button primary" href={windows}>
              Download for Windows
              <span aria-hidden="true">↘</span>
            </a>
            <a className="button secondary" href={appImage}>
              Get the AppImage
            </a>
          </div>
          <p className="microcopy">
            MIT licensed · SHA-256 checksums · no bundled Minecraft files
          </p>
        </div>

        <div className="heroVisual">
          <div className="window">
            <div className="windowBar">
              <div><span /><span /><span /></div>
              <small>ONYX LAUNCHER</small>
              <b>1.6.3</b>
            </div>
            <img src="/home.png" alt="Onyx Launcher showing the home dashboard" />
          </div>
          <div className="floatCard loaderCard">
            <small>LOADERS</small>
            <strong>Vanilla · Fabric · Quilt</strong>
            <strong>Forge · NeoForge</strong>
          </div>
          <div className="floatCard javaCard">
            <span>✓</span>
            <div>
              <small>JAVA READY</small>
              <strong>Temurin 21</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="proof">
        <div className="shell proofGrid">
          <div><strong>5</strong><span>game loaders</span></div>
          <div><strong>3</strong><span>managed Java lines</span></div>
          <div><strong>2</strong><span>desktop platforms</span></div>
          <div><strong>MIT</strong><span>open-source license</span></div>
        </div>
      </section>

      <section className="section shell" id="features">
        <div className="sectionHead">
          <p className="kicker">BUILT FOR THE MESSY PART</p>
          <h2>A launcher that helps after you click Play.</h2>
          <p>
            Installing a pack is the easy bit. Keeping instances understandable,
            recoverable, and fast is where Onyx earns its place.
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
              <p className="kicker">A QUIET INTERFACE</p>
              <h2>Your instances first. Noise somewhere else.</h2>
            </div>
            <p>
              The interface stays compact while the deeper tools remain close:
              content, profiles, maintenance, performance, and recovery.
            </p>
          </div>
          <div className="screenGrid">
            <figure className="screen large">
              <img src="/instance.png" alt="Onyx Launcher instance management screen" />
              <figcaption><span>INSTANCE CONTROL</span><b>Everything for one game, in one place.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/discover.png" alt="Onyx Launcher Modrinth discovery catalog" />
              <figcaption><span>DISCOVER</span><b>Browse Modrinth without leaving the launcher.</b></figcaption>
            </figure>
            <figure className="screen">
              <img src="/library.png" alt="Onyx Launcher content library" />
              <figcaption><span>LIBRARY</span><b>See what is installed and where it belongs.</b></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section shell safety">
        <div className="safetyCopy">
          <p className="kicker">DIAGNOSTICS, NOT GUESSWORK</p>
          <h2>When a modpack breaks, keep the evidence.</h2>
          <p>
            Capture the launch, narrow conflicting mods, inspect performance, and
            export a redacted support bundle without handing over your account data.
          </p>
          <ul>
            <li><span>↳</span> Crash Bisect across controlled launches</li>
            <li><span>↳</span> Flight Recorder for CPU, memory, GC, and startup</li>
            <li><span>↳</span> Redacted support bundles for safer troubleshooting</li>
          </ul>
        </div>
        <div className="terminal" aria-label="Example diagnostic output">
          <div className="terminalTop"><span>ONYX / PREFLIGHT</span><b>PASS</b></div>
          <pre>{`instance       Better Adventures
minecraft      1.21.1
loader         Fabric 0.16.10
java           Temurin 21.0.7
memory         6144 MB
world guard    snapshot ready
mod scan       148 checked

✓ no blocking conflicts found
→ ready to launch`}</pre>
        </div>
      </section>

      <section className="download" id="download">
        <div className="shell">
          <div className="sectionHead">
            <p className="kicker">DOWNLOAD ONYX 1.6.3</p>
            <h2>Pick a platform. Keep your worlds.</h2>
          </div>
          <div className="downloadGrid">
            <article>
              <div className="platformIcon">▣</div>
              <small>WINDOWS 10 / 11 · X64</small>
              <h3>Windows</h3>
              <p>NSIS installer for a normal setup, or a portable executable.</p>
              <a className="button primary" href={windows}>Download installer <span>↘</span></a>
              <a className="textLink" href={portable}>Portable .exe</a>
              <a className="textLink" href={scoop}>Install with Scoop</a>
            </article>
            <article>
              <div className="platformIcon">◆</div>
              <small>MODERN LINUX · X64</small>
              <h3>Linux</h3>
              <p>Run the AppImage directly, or unpack the portable tar archive.</p>
              <a className="button primary" href={appImage}>Download AppImage <span>↘</span></a>
              <a className="textLink" href={linuxTar}>Portable .tar.gz</a>
            </article>
            <article className="sourceCard">
              <div className="platformIcon">&lt;/&gt;</div>
              <small>MIT LICENSED</small>
              <h3>Source</h3>
              <p>Inspect the code, verify the release workflow, or build it yourself.</p>
              <a className="button secondary" href={repo}>View source</a>
              <a className="textLink" href={`${release}#assets`}>Checksums &amp; release notes</a>
            </article>
          </div>
          <p className="unsignedNote">
            Windows builds are currently unsigned, so SmartScreen may show a warning.
            Verify the published SHA-256 checksum before running a download.
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
            <a href={release}>Release 1.6.3</a>
            <a href={`${repo}/blob/master/SECURITY.md`}>Security</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
