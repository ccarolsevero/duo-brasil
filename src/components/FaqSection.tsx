import { SectionHeading } from "@/components/SectionHeading";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  items: FaqItem[];
};

function ToggleIcon() {
  return (
    <span className="faq-toggle-icon relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-gray-light text-blue-deep">
      <span className="faq-toggle-bar-h absolute h-0.5 w-3 rounded-full bg-current" />
      <span className="faq-toggle-bar-v absolute h-3 w-0.5 rounded-full bg-current" />
    </span>
  );
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="bg-gray-light py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          title="FAQ"
          description="Respostas diretas sobre método, investimento e como trabalhamos com cada cliente."
          align="center"
        />

        <div className="faq-list mt-12 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_12px_40px_rgba(5,43,80,0.05)]">
          {items.map((faq, index) => (
            <details
              key={faq.question}
              className="faq-item group"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="faq-summary flex cursor-pointer list-none items-center gap-4 px-5 py-5 md:gap-5 md:px-7 md:py-6">
                <span className="pointer-events-none flex-1 text-base font-semibold leading-snug text-blue-deep md:text-[17px]">
                  {faq.question}
                </span>
                <span className="pointer-events-none">
                  <ToggleIcon />
                </span>
              </summary>
              <div className="faq-answer px-5 pb-5 md:px-7 md:pb-6">
                <p className="text-sm leading-relaxed text-text-dark md:text-[15px] md:leading-7">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
