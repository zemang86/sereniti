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
  title: "SERENITILABS SDN. BHD. - AI Innovation Company",
  description: "SERENITILABS SDN. BHD. is a Malaysian AI company and creator of Damaura AI, an Islamic Psychology Companion for mental wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} font-mono antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
