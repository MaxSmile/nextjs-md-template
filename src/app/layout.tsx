// src/app/layout.tsx

import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Mulish } from "next/font/google";

import "./globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const font = Mulish({ subsets: ["latin"] });

// TODO: Default metadata
export const metadata: Metadata = {
  title: `So interesting ${CMS_NAME}`,
  description: `A statically generated blog example using Next.js and ${CMS_NAME}.`,
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="msapplication-config"
          content="/browserconfig.xml"
        />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </head>
      <body className={font.className}>
        <Header />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
