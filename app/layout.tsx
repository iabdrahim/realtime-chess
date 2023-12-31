import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/components/globals.css";

const inter = Inter({ subsets: ["latin-ext"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="">
      <body>
        <>{children}</>
      </body>
    </html>
  );
}
