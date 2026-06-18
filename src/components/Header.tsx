import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

type HeaderProps = {
  variant?: "light" | "dark";
};

export function Header({ variant = "light" }: HeaderProps) {
  const isDark = variant === "dark";

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md ${
        isDark
          ? "border-white/10 bg-blue-deep/95"
          : "border-border bg-white/95"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={isDark ? "/logo-horizontal.png" : "/logo-horizontal.png"}
            alt={siteConfig.name}
            width={160}
            height={40}
            className={`h-9 w-auto ${isDark ? "brightness-0 invert" : ""}`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${
                isDark
                  ? "text-white/80 hover:text-turquoise"
                  : "text-blue-deep hover:text-turquoise-dark"
              }`}
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
