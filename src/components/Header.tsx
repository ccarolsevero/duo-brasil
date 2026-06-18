import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-blue-deep/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={brandAssets.logoWhite}
            alt={siteConfig.name}
            width={200}
            height={52}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/80 transition-colors hover:text-turquoise"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-turquoise px-4 py-2.5 text-sm font-semibold text-blue-deep transition hover:bg-turquoise/90"
        >
          Diagnóstico Gratuito
        </Link>
      </div>
    </header>
  );
}
