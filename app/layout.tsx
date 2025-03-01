import Navbar from "@/components/Navbar";
import AuthProvider from "@/context/AuthProvider";
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
  title: "NextAuth Tutorial",
  description: "Attending a lesson on this",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <AuthProvider>
          <main className="flex justify-center items-start p-6 min-h-screen dark:bg-slate-900">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
