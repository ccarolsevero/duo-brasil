import { siteConfig } from "@/lib/site-data";

type ContactIconsProps = {
  className?: string;
};

function IconLink({
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
      className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-turquoise/60 hover:bg-turquoise/15 hover:text-turquoise"
    >
      {children}
    </a>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <path
        d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2.25" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="m4 7 8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <path
        d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 9.8c.2-.5.8-.8 1.3-.7.5.1.9.5 1 1 .1.5-.1 1-.5 1.3-.3.2-.4.5-.3.8l.3 1.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="h-6 w-6">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 10v7M8 7v.01M12 17v-4.5c0-1.2 1-2.2 2.2-2.2s2.3 1 2.3 2.3V17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContactIcons({ className = "" }: ContactIconsProps) {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      <IconLink
        href={siteConfig.mapsUrl}
        label={`Endereço: ${siteConfig.address}, ${siteConfig.addressComplement}`}
      >
        <MapPinIcon />
      </IconLink>
      <a
        href={`mailto:${siteConfig.email}`}
        aria-label={`E-mail: ${siteConfig.email}`}
        title={`E-mail: ${siteConfig.email}`}
        className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition duration-300 hover:border-turquoise/60 hover:bg-turquoise/15 hover:text-turquoise"
      >
        <MailIcon />
      </a>
      <IconLink href={whatsappHref} label="WhatsApp">
        <WhatsAppIcon />
      </IconLink>
      <IconLink href={siteConfig.instagram} label="Instagram">
        <InstagramIcon />
      </IconLink>
      <IconLink href={siteConfig.linkedin} label="LinkedIn">
        <LinkedInIcon />
      </IconLink>
    </div>
  );
}
