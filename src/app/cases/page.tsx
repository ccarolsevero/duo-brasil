import { Button } from "@/components/Button";
import { AggregateResultsChart, CaseLeadsChart, CasePerformanceChart } from "@/components/CaseCharts";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SectionHeading } from "@/components/SectionHeading";
import { aggregateResults, successCases } from "@/lib/cases-data";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: `Cases de Sucesso | ${siteConfig.name}`,
  description: "Resultados documentados de clientes da DUO Brasil em tráfego pago.",
};

export default function CasesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="border-b border-border bg-white py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <SectionHeading
              eyebrow="Cases de sucesso"
              title="Resultados mensuráveis, documentados e transparentes"
              description="Cada case apresenta indicadores reais de performance — investimento, receita, leads e evolução ao longo do tempo. Dados que sustentam decisões, não promessas."
            />
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-bold text-blue-deep">
                Evolução consolidada da carteira
              </h3>
              <p className="mt-2 text-sm text-text-dark">
                ROAS médio e volume de leads gerados nos últimos 6 meses de operação.
              </p>
              <div className="mt-8">
                <AggregateResultsChart data={aggregateResults} />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-8">
            {successCases.map((caseItem) => (
              <article
                key={caseItem.id}
                id={caseItem.id}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm"
              >
                <div className="border-b border-border bg-blue-deep px-8 py-6 text-white">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-turquoise">
                        {caseItem.segment}
                      </p>
                      <h2 className="mt-1 text-2xl font-extrabold">{caseItem.client}</h2>
                    </div>
                    <span className="rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold">
                      {caseItem.period}
                    </span>
                  </div>
                </div>

                <div className="grid gap-8 p-8 lg:grid-cols-2">
                  <div>
                    <p className="text-base leading-relaxed text-text-dark">{caseItem.summary}</p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-bold text-blue-deep">Desafio</h4>
                        <p className="mt-1 text-sm text-text-dark">{caseItem.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-blue-deep">Solução</h4>
                        <p className="mt-1 text-sm text-text-dark">{caseItem.solution}</p>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      {caseItem.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-border bg-gray-light p-4"
                        >
                          <p className="text-xs font-semibold text-text-dark">{metric.label}</p>
                          <p className="mt-2 text-lg font-extrabold text-blue-deep">
                            {metric.unit === "R$"
                              ? `${metric.unit} ${metric.after.toLocaleString("pt-BR")}`
                              : `${metric.after}${metric.unit}`}
                          </p>
                          <p className="mt-1 text-xs text-turquoise-dark">
                            de{" "}
                            {metric.unit === "R$"
                              ? `${metric.unit} ${metric.before.toLocaleString("pt-BR")}`
                              : `${metric.before}${metric.unit}`}{" "}
                            · {metric.improvement}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="mt-6 rounded-lg bg-turquoise/10 px-4 py-3 text-sm font-semibold text-blue-deep">
                      {caseItem.highlight}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="rounded-xl border border-border p-4">
                      <h4 className="mb-4 text-sm font-bold text-blue-deep">
                        Investimento vs. Receita
                      </h4>
                      <CasePerformanceChart data={caseItem.chartData} />
                    </div>
                    <div className="rounded-xl border border-border p-4">
                      <h4 className="mb-4 text-sm font-bold text-blue-deep">
                        Evolução de Leads
                      </h4>
                      <CaseLeadsChart data={caseItem.chartData} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-blue-deep py-16 text-white">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Quer resultados como estes no seu negócio?
            </h2>
            <p className="mt-4 text-white/75">
              Agende um diagnóstico gratuito e descubra onde seu funil está perdendo
              investimento.
            </p>
            <div className="mt-8">
              <Button
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                external
              >
                Agendar Diagnóstico Gratuito
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
