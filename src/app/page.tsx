import Image from "next/image";
import { Button } from "@/components/Button";
import { ClientLogos } from "@/components/ClientLogos";
import { EpicMethodCards } from "@/components/EpicMethodCards";
import { FaqSection } from "@/components/FaqSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import {
  deliverables,
  epicMethod,
  faqs,
  siteConfig,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading title="O que entregamos para transformar Marketing em Resultado." />

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {deliverables.map((item) => (
                <article
                  key={item}
                  className="flex h-full items-start gap-3 rounded-xl border border-border bg-white p-5 shadow-sm transition hover:border-turquoise/30 hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-turquoise-dark"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
                      <path
                        d="M5 10l3 3 7-7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-blue-deep">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="metodo" className="bg-blue-deep py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="O método"
              title="Método E.P.I.C™. Gestão com disciplina de indústria"
              description="Quatro etapas da estratégia ao controle. Cada fase com objetivo, entrega e indicador definidos."
              light
            />

            <EpicMethodCards steps={epicMethod} />
          </div>
        </section>

        <section className="bg-[#f7fafc] py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cases de sucesso"
              title={
                <>
                  Empresas de diferentes segmentos. Um objetivo em comum:{" "}
                  <span className="text-turquoise-dark">Vender Mais.</span>
                </>
              }
              description="Empresas que confiam seus resultados à DUO Brasil. Veja os números por segmento e período de operação."
            />
            <div className="mt-10">
              <Button href="/cases" withArrow>
                Ver todos os cases
              </Button>
            </div>
          </div>
        </section>

        <ClientLogos />

        <section id="sobre" className="py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
            <div>
              <SectionHeading
                eyebrow="Sobre a fundadora"
                title="Quem está por trás da DUO Brasil"
              />
              <div className="mt-8 space-y-4 text-base leading-relaxed text-text-dark">
                <p>
                  <strong className="text-blue-deep">Monique Rebessi</strong>, fundadora da
                  DUO Brasil. Antes de ser marketing, era indústria.
                </p>
                <p>
                  Durante <strong className="text-blue-deep">15 anos</strong>, construiu sua
                  carreira em uma multinacional japonesa, onde cada processo, indicador e
                  resultado era medido e melhorado continuamente. Six Sigma, Lean
                  Manufacturing e Kaizen não eram conceitos teóricos, eram o dia a dia.
                </p>
                <p>
                  Foi essa experiência que deu origem ao{" "}
                  <strong className="text-blue-deep">Método E.P.I.C™</strong>: porque anúncio
                  não é arte abstrata. É investimento. E investimento se mede, se controla e
                  se otimiza.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full sm:aspect-[5/4]">
                <Image
                  src="/monique-rebessi.png"
                  alt="Monique Rebessi, fundadora da DUO Brasil"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 540px"
                />
              </div>
              <div className="p-8">
              <p className="text-lg font-bold text-blue-deep">Monique Rebessi</p>
              <p className="text-sm font-semibold text-turquoise-dark">
                Fundadora, DUO Brasil
              </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />

        <section id="contato" className="bg-gradient-to-br from-blue-deep to-[#08172e] py-20 text-white">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Contato"
              title="Resultados reais começam com uma conversa estratégica"
              description="Agende seu diagnóstico gratuito de 30 minutos. Sem compromisso, com análise real do seu negócio."
              light
              align="center"
            />
            <div className="mt-10 flex justify-center">
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                external
                size="lg"
                withArrow
              >
                Falar no WhatsApp
              </Button>
            </div>

            <div className="mt-12 flex flex-col gap-6 text-left md:flex-row md:items-center md:justify-center md:gap-10">
              <div className="md:max-w-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
                  Endereço
                </p>
                <p className="mt-4 text-base leading-relaxed text-white/90">
                  {siteConfig.address}
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  {siteConfig.addressComplement}
                </p>
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-turquoise transition hover:text-white"
                >
                  Abrir no Google Maps
                  <span aria-hidden>→</span>
                </a>
              </div>

              <div className="h-44 w-full overflow-hidden rounded-xl md:h-48 md:w-56 lg:w-64">
                <iframe
                  title="Localização DUO Brasil no Google Maps"
                  src={siteConfig.mapsEmbedUrl}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
