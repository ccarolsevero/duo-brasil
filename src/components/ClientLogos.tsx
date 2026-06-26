import Image from "next/image";
import { clients } from "@/lib/clients-data";

type Client = (typeof clients)[number];

function ClientLogoItem({
  client,
  variant,
}: {
  client: Client;
  variant: "mobile" | "desktop";
}) {
  const logoScale = client.scale ?? 1.65;

  return (
    <div
      className={
        variant === "mobile"
          ? "client-logo-cell flex h-16 w-20 shrink-0 items-center justify-center px-1"
          : "client-logo-cell flex h-16 min-w-0 flex-1 items-center justify-center overflow-hidden sm:h-20 md:h-24 lg:h-28"
      }
    >
      <Image
        src={client.logo}
        alt={`Logo ${client.name}`}
        width={320}
        height={128}
        className="client-logo h-full w-full object-contain"
        style={{ transform: `scale(${logoScale})` }}
      />
    </div>
  );
}

export function ClientLogos() {
  const marqueeClients = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-white py-2 md:py-3">
      <div className="mx-auto w-full max-w-[88rem] px-2 sm:px-3 lg:px-4">
        <p className="mb-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-turquoise-dark">
          Empresas que confiam no Método E.P.I.C™
        </p>

        <div className="relative overflow-hidden md:hidden">
          <div className="client-logos-marquee flex w-max items-center">
            {marqueeClients.map((client, index) => (
              <ClientLogoItem
                key={`${client.name}-${index}`}
                client={client}
                variant="mobile"
              />
            ))}
          </div>
        </div>

        <div className="hidden flex-nowrap items-center gap-0 md:flex">
          {clients.map((client) => (
            <ClientLogoItem key={client.name} client={client} variant="desktop" />
          ))}
        </div>
      </div>
    </section>
  );
}
