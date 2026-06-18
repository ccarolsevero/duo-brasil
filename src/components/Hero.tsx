import Image from "next/image";
import { Button } from "@/components/Button";
import { brandAssets } from "@/lib/brand-assets";
import { siteConfig } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="hero-section relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-[#063055] to-[#0a1f38]" />
      <div className="hero-beam absolute -right-[15%] top-0 h-full w-[60%]" />
      <div className="hero-grid absolute inset-0" />

      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-turquoise/5 blur-3xl" />
      <div className="absolute right-1/3 top-1/3 h-56 w-56 rounded-full bg-blue-medium/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col items-start justify-center px-6 py-28 md:py-32 lg:px-10 lg:py-36">
        <div className="hero-symbol pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 opacity-[0.04] lg:block">
          <Image
            src={brandAssets.favicon}
            alt=""
            width={360}
            height={360}
            aria-hidden
          />
        </div>

        <div className="relative z-10 max-w-3xl">
          <p className="hero-fade hero-fade-1 mb-10 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-turquoise/90">
            <span className="h-px w-10 bg-turquoise/40" />
            15 anos de indústria japonesa aplicados ao tráfego pago
          </p>

          <h1 className="hero-fade hero-fade-2 text-[2rem] font-bold leading-[1.2] tracking-tight text-white/95 sm:text-4xl md:text-5xl md:leading-[1.15] lg:text-[3.4rem]">
            {siteConfig.hero.titleLine1}
            <br />
            <span className="font-extrabold text-turquoise">
              {siteConfig.hero.titleHighlight}
            </span>
            {" que Querem Crescer"}
          </h1>

          <p className="hero-fade hero-fade-3 mt-10 max-w-lg text-lg font-normal leading-[1.75] text-white/65 md:text-xl md:leading-[1.8]">
            {siteConfig.hero.subtitle}
          </p>

          <div className="hero-fade hero-fade-4 mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              external
              size="lg"
            >
              Solicitar Diagnóstico
            </Button>
            <Button href="/#metodo" variant="ghost" size="lg">
              Conheça Nosso Método
            </Button>
          </div>

          <p className="hero-fade hero-fade-5 mt-8 text-sm leading-relaxed text-white/40">
            30 minutos online, sem compromisso, com diagnóstico real do seu negócio.
          </p>
        </div>
      </div>

      <div className="hero-divider absolute inset-x-0 bottom-0 h-20 bg-gray-light blade-divider" />
    </section>
  );
}
