import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-data";

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-deep/20 text-blue-deep transition hover:border-turquoise hover:text-turquoise-dark"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 10v7M8 7v.01M12 17v-4.5c0-1.2 1-2.2 2.2-2.2s2.3 1 2.3 2.3V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-start lg:gap-0 lg:text-left">
          <Link href="/" className="shrink-0">
            <Image
              src={brandAssets.logoLight}
              alt={siteConfig.name}
              width={220}
              height={58}
              className="h-12 w-auto"
            />
          </Link>

          <div className="flex items-center gap-3 lg:ml-14">
            <SocialLink href={siteConfig.instagram} label="Instagram">
              <InstagramIcon />
            </SocialLink>
            <SocialLink href={siteConfig.linkedin} label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
          </div>

          <div className="hidden flex-1 lg:block" aria-hidden />

          <p className="text-sm text-text-dark lg:ml-8">
            <strong className="font-semibold text-blue-deep">Contato:</strong>{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="underline decoration-blue-deep/30 underline-offset-2 transition hover:text-turquoise-dark"
            >
              {siteConfig.email}
            </a>
          </p>

          <p className="text-sm text-text-dark/70 lg:ml-10">
            © {new Date().getFullYear()} | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
