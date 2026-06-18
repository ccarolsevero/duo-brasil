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
  epicMethod,
  faqs,
  services,
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
            <SectionHeading
              eyebrow="O que entregamos"
              title="Resultado mensurável, não mais uma ferramenta."
              description="Tráfego pago é o meio. O que entregamos é uma operação estratégica completa — do anúncio ao fechamento da venda."
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="blade-card rounded-xl border border-border bg-white p-6 shadow-sm transition hover:border-turquoise/30 hover:shadow-md"
                >
                  <div className="mb-4 h-1 w-10 bg-turquoise" />
                  <h3 className="text-lg font-bold text-blue-deep">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-dark">
                    {service.description}
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
              title="Método E.P.I.C™ — Gestão com disciplina de indústria"
              description="Quatro etapas conectadas, da estratégia ao controle. Cada fase tem objetivo, entrega e indicador definidos."
              light
            />

            <EpicMethodCards steps={epicMethod} />
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cases de sucesso"
              title="Resultados documentados de clientes reais"
              description="Empresas que confiam seus resultados à DUO Brasil. Veja os números por segmento e período de operação."
            />
            <div className="mt-8">
              <Button href="/cases">Ver todos os cases →</Button>
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
                  Manufacturing e Kaizen não eram conceitos teóricos — eram o dia a dia.
                </p>
                <p>
                  Foi essa experiência que deu origem ao{" "}
                  <strong className="text-blue-deep">Método E.P.I.C™</strong>: porque anúncio
                  não é arte abstrata. É investimento. E investimento se mede, se controla e
                  se otimiza.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Método E.P.I.C™", "Meta Ads", "Google Ads", "Análise F.C.A.", "Estratégia de Vendas"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold text-blue-deep"
                    >
                      {tag}
                    </span>
                  ),
                )}
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
              <p className="mt-4 text-sm leading-relaxed text-text-dark">
                Estrategista digital com 15 anos de experiência em indústria japonesa,
                aplicando disciplina de gestão ao tráfego pago e ao crescimento digital.
              </p>
              </div>
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />

        <section id="contato" className="bg-gradient-to-br from-blue-deep to-[#08172e] py-20 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionHeading
              eyebrow="Contato"
              title="Resultados reais começam com uma conversa estratégica"
              description="Agende seu diagnóstico gratuito de 30 minutos. Sem compromisso, com análise real do seu negócio."
              light
              align="center"
            />
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                external
              >
                Falar no WhatsApp
              </Button>
              <Button
                href={`mailto:${siteConfig.email}`}
                external
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                {siteConfig.email}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
