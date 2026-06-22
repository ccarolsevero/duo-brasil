import Image from "next/image";
import { clients } from "@/lib/clients-data";

export function ClientLogos() {
  return (
    <section className="border-y border-border bg-white py-10 md:py-14">
      <div className="mx-auto w-full max-w-[88rem] px-2 sm:px-3 lg:px-4">
        <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-turquoise-dark md:mb-10">
          Empresas que confiam no Método E.P.I.C™
        </p>

        <div className="flex flex-nowrap items-center gap-0">
          {clients.map((client) => {
            const logoScale = client.scale ?? 1.65;

            return (
              <div
                key={client.name}
                className="client-logo-cell flex h-20 min-w-0 flex-1 items-center justify-center overflow-hidden sm:h-24 md:h-28 lg:h-32 xl:h-36"
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
