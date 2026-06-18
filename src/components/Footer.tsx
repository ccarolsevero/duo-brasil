import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-blue-deep text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Image
              src={brandAssets.logoDark}
              alt={siteConfig.name}
              width={200}
              height={52}
              className="mb-6 h-10 w-auto"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Gestão de tráfego pago com metodologia de indústria. Tráfego pago,
              posicionamento e crescimento mensurável.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-turquoise">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-turquoise">
              Contato
            </h3>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp comercial
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. Monique Rebessi. Método E.P.I.C™.</p>
          <p>Tráfego pago · Posicionamento · Resultado.</p>
        </div>
      </div>
    </footer>
  );
}
