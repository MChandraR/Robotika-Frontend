import type { Metadata } from "next";
import "./globals.css";
import { Ubuntu } from "next/font/google";
import Navbar from "@/components/Navbar";

const ubuntu = Ubuntu({
  weight : '400', 
  subsets : ["greek"]
});

export const metadata: Metadata = {
  title: "Robotika UMRAH",
  description: "Generated by create next app",
};

export default function RootLayout({
  children, 
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} w-full antialiased bg-white `}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
