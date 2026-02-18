import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codex Agent Starter Kit",
  description: "Codex-first starter kit with explicit markdown agents and playbooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
