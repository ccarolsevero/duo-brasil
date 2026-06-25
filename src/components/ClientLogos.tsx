import Image from "next/image";
import { clients } from "@/lib/clients-data";

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-white py-2 md:py-3">
      <div className="mx-auto w-full max-w-[88rem] px-2 sm:px-3 lg:px-4">
        <p className="mb-1 text-center text-xs font-bold uppercase tracking-[0.2em] text-turquoise-dark">
          Empresas que confiam no Método E.P.I.C™
        </p>

        <div className="flex flex-nowrap items-center gap-0">
          {clients.map((client) => {
            const logoScale = client.scale ?? 1.65;

            return (
              <div
                key={client.name}
                className="client-logo-cell flex h-16 min-w-0 flex-1 items-center justify-center overflow-hidden sm:h-20 md:h-24 lg:h-28"
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
          })}
        </div>
      </div>
    </section>
  );
}
