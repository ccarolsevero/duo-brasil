import { Button } from "@/components/Button";
import { EpicMethodCards } from "@/components/EpicMethodCards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import {
  clients,
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
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-deep to-[#08172e] text-white">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rotate-12 bg-turquoise/25 blur-3xl" />
            <div className="absolute -left-20 bottom-0 h-72 w-72 bg-blue-medium/30 blur-3xl" />
            <div className="absolute -right-20 top-0 h-72 w-72 bg-blue-medium/30 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center md:py-36 lg:px-8">
            <div className="animate-fade-up">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-turquoise">
                15 anos de indústria japonesa aplicados ao tráfego pago
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                {siteConfig.hero.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/78 md:text-xl">
                {siteConfig.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  external
                >
                  Solicitar Diagnóstico
                </Button>
                <Button
                  href="/#metodo"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Conheça Nosso Método
                </Button>
              </div>
              <p className="mt-5 text-sm text-white/55">
                30 minutos online, sem compromisso, com diagnóstico real do seu negócio.
              </p>
            </div>
          </div>
        </section>

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

        <section className="border-y border-border bg-white py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-turquoise-dark">
              Empresas que confiam no Método E.P.I.C™
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {clients.map((client) => (
                <span
                  key={client}
                  className="rounded-lg border border-border bg-gray-light px-5 py-3 text-sm font-bold text-blue-deep"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </section>

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

            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-deep text-2xl font-extrabold text-turquoise">
                MR
              </div>
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
        </section>

        <section className="bg-gray-light py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Dúvidas frequentes"
              title="Perguntas frequentes"
              align="center"
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-white p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold text-blue-deep marker:hidden">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-text-dark">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

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
