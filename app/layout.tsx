import type { Metadata } from "next";
import "./globals.css";

const title = "Onyx Launcher — A modern Minecraft launcher";
const description =
  "Open-source Minecraft launcher for Windows and Linux with isolated instances, Modrinth modpacks, automatic Java, crash diagnostics, and safe backups.";
const socialImage =
  "https://raw.githubusercontent.com/lonestill/onyx-launcher/master/artifacts/home.png";
const website = "https://lonestill.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(website),
  title,
  description,
  alternates: {
    canonical: "/"
  },
  keywords: [
    "Minecraft launcher",
    "open source Minecraft launcher",
    "Modrinth launcher",
    "Fabric launcher",
    "Forge launcher",
    "Linux Minecraft launcher"
  ],
  icons: {
    icon: "/icon.png"
  },
  openGraph: {
    title,
    description,
    url: website,
    siteName: "Onyx Launcher",
    type: "website",
    images: [{ url: socialImage, width: 1600, height: 1000, alt: "Onyx Launcher home screen" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [socialImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
