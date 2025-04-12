import type { Metadata } from "next";
import { sequelSans } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Straqa",
  description: "AI-Powered Solutions to Grow, Manage, and Scale Your Business",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={`${sequelSans.className} antialiased`}>{children}</body>
    </html>
  );
}
