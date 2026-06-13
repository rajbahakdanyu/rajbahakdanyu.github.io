import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danyu Rajbahak | Full-Stack Engineer",
  description:
    "Full-stack engineer based in Brisbane. Building software that is fast, considered, and ships.",
  metadataBase: new URL("https://rajbahakdanyu.github.io"),
  openGraph: {
    title: "Danyu Rajbahak | Full-Stack Engineer",
    description:
      "Full-stack engineer based in Brisbane. Building software that is fast, considered, and ships.",
    url: "/portfolio",
    siteName: "Danyu Rajbahak",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Danyu Rajbahak",
  url: "https://rajbahakdanyu.github.io/portfolio",
  jobTitle: "Full-Stack Engineer",
  sameAs: [
    "https://github.com/rajbahakdanyu",
    "https://linkedin.com/in/danyu-rajbahak",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${display.variable} ${sans.variable} ${mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
