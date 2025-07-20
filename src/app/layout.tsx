import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/context/MenuContext";
import { ResponsiveProvider } from "@/context/ResponsiveContext";
import LayoutConfig from "@/components/layout/LayoutConfig";

const InterFont = Inter({
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const SpaceGrotesk = Space_Grotesk({
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HUD",
  description:
    "HUD becomes your partner to take care of your skin and let you away from itching and seating",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${InterFont.variable} ${SpaceGrotesk.variable} antialiased
        flex flex-col min-h-full
        `}
      >
        <ResponsiveProvider>
          <MenuProvider>
            <LayoutConfig>{children}</LayoutConfig>
          </MenuProvider>
        </ResponsiveProvider>
      </body>
    </html>
  );
}
