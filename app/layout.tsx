import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar" id="navbar">
          <ul>
              <li><a href="">jcvsqz</a></li>
              <li><a href="">About Me</a></li>
              <li><a href="">Experiences</a></li>
              <li><a href="#skills">Skills</a></li>
          </ul>
      </nav>
        {children}</body>
    </html>
  );
}
