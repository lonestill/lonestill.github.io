import type { Metadata } from "next";
import "./globals.css";

const title = "Onyx Launcher — Modern Open-Source Minecraft Launcher";
const description =
  "Fast, modern open-source desktop Minecraft launcher with built-in runtime telemetry, Onyx Probe FPS recording, Modrinth integration, automatic Java, and Ghost Mode.";
const website = "https://lonestill.github.io";
const socialImage = `${website}/social-card.png`;

export const metadata: Metadata = {
  metadataBase: new URL(website),
  title,
  description,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml"
    }
  },
  keywords: [
    "Minecraft launcher",
    "desktop Minecraft launcher",
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
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Onyx Launcher — open-source Minecraft launcher for Windows and Linux"
      }
    ]
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
