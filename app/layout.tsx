import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";
import PersonSchema from "@/components/PersonSchema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamed-portfolio-b2d.pages.dev"),

  title: {
    default: "Mohamed Rafik Mellouk | Junior Full-Stack Web Developer",
    template: "%s | Mohamed Rafik Mellouk",
  },

  description:
    "Mohamed Rafik Mellouk is a Junior Full-Stack Web Developer and Freelance Developer specializing in React, Next.js, Node.js and TypeScript. Explore his projects, skills and experience.",

  verification: {
    google: "VadszisPy7QlLRFKyx9BUPUgwMXYiVcHMvfv13z_P-0",
  },

  keywords: [
    "Mohamed Rafik Mellouk",
    "Mohamed Mellouk",
    "Rafik Mellouk",
    "Junior Full-Stack Web Developer",
    "Full-Stack Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],

  authors: [
    {
      name: "Mohamed Rafik Mellouk",
      url: "https://mohamed-portfolio-b2d.pages.dev",
    },
  ],

  creator: "Mohamed Rafik Mellouk",

  alternates: {
    canonical: "https://mohamed-portfolio-b2d.pages.dev",
  },

  openGraph: {
    title: "Mohamed Rafik Mellouk | Junior Full-Stack Web Developer",
    description:
      "Portfolio of Mohamed Rafik Mellouk, a Junior Full-Stack Web Developer and Freelance Developer specializing in React, Next.js, Node.js and TypeScript.",
    url: "https://mohamed-portfolio-b2d.pages.dev",
    siteName: "Mohamed Rafik Mellouk",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/mohamed1.png",
        width: 512,
        height: 512,
        alt: "Mohamed Rafik Mellouk",
      },
    ],
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
      <body className="min-h-full flex flex-col">
        <PersonSchema />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
