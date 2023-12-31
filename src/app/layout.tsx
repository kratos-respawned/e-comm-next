import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Condensed } from "next/font/google";
import NavBar from "@/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });
const ubuntu = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    
      <body className={cn("bg-[#f8f8f8]  ", inter.className, ubuntu.variable)}>
      <NavBar />
        {children}
      </body>
    </html>
  );
}
