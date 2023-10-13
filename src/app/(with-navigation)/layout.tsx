import { cn } from "../utils";
import "./globals.css";
import { Providers } from "./providers";
import Navigation from "@/app/_components/Navigation";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "Noto Sans",
    "sans-serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "Noto Color Emoji",
  ],
});

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
          "flex h-screen w-screen bg-background text-gray-900 antialiased dark:text-gray-200",
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
