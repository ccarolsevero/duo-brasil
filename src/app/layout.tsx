import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { brandAssets } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-data";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | Tráfego Pago com Método`,
  description: siteConfig.description,
  icons: {
    icon: brandAssets.favicon,
    apple: brandAssets.favicon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} antialiased`}>
        {children}
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
