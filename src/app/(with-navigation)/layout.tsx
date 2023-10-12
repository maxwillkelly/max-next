import { cn } from "../utils";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/app/_components/Navigation";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Max Kelly - Software Engineer",
  description: "A portfolio of Max Kelly, a software engineer based in the UK",
};

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex h-screen w-screen bg-background font-sans antialiased",
          raleway.className,
        )}
      >
        <div className="flex h-screen w-screen flex-col">
          <Providers>
            <Navigation />
            <main className="flex-1">{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}