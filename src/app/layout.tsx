import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "User Profile - Coding Challenge Omar Pimentel",
  description: "Coding Challenge Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header>{children}</Header>
      </body>
    </html>
  );
}
