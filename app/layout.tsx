import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Rafik Mellouk | Junior Full-Stack Web Developer",
  description:
    "Portfolio of Mohamed Rafik Mellouk, a Junior Full-Stack Web Developer building modern web applications with React, Next.js, Node.js and TypeScript.",
  keywords: [
    "Mohamed Rafik Mellouk",
    "Junior Full-Stack Developer",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Mohamed Rafik Mellouk" }],
  creator: "Mohamed Rafik Mellouk",
  openGraph: {
    title: "Mohamed Rafik Mellouk | Junior Full-Stack Web Developer",
    description:
      "Portfolio of Mohamed Rafik Mellouk, a Junior Full-Stack Web Developer.",
    type: "website",
  },

   icons: {
    icon: "/mohamed1.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
