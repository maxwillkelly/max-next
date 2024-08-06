import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Max Kelly - Software Engineer",
  description: "A portfolio of Max Kelly, a software engineer based in the UK",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
