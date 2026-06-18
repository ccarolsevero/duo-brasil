"use client";

import { useState } from "react";
import type { epicMethod } from "@/lib/site-data";

type EpicStep = (typeof epicMethod)[number];

type EpicMethodCardsProps = {
  steps: EpicStep[];
};

export function EpicMethodCards({ steps }: EpicMethodCardsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="mt-14">
      <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        <div
          aria-hidden
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-14 hidden h-px lg:block"
        >
          <div className="h-full w-full bg-gradient-to-r from-turquoise/0 via-turquoise/50 to-turquoise/0" />
          <div
            className="epic-flow-dot absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-turquoise shadow-[0_0_12px_rgba(18,198,194,0.8)]"
            style={{
              left:
                activeIndex === null
                  ? "0%"
                  : `${(activeIndex / (steps.length - 1)) * 100}%`,
              transition: "left 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </div>

        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          const isLinked =
            activeIndex !== null &&
            (index === activeIndex ||
              index === activeIndex - 1 ||
              index === activeIndex + 1);

          return (
            <article
              key={step.letter}
              className="epic-card-enter group relative"
              style={{ animationDelay: `${index * 120}ms` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(index)}
              onBlur={() => setActiveIndex(null)}
              tabIndex={0}
            >
              {index < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute -right-3 top-14 z-10 hidden text-turquoise/40 transition-colors duration-300 lg:block group-hover:text-turquoise"
                >
                  →
                </span>
              )}

              <div
                className={`relative h-full overflow-hidden rounded-xl border p-6 transition-all duration-300 ease-out backdrop-blur-sm ${
                  isActive
                    ? "-translate-y-2 border-turquoise/60 bg-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                    : isLinked
                      ? "border-white/20 bg-white/[0.07]"
                      : "border-white/10 bg-white/5"
                }`}
              >
                <div
                  aria-hidden
                  className={`absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-turquoise to-turquoise-dark transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />

                <div className="relative">
                  <span
                    className={`block text-5xl font-extrabold leading-none transition-all duration-300 ${
                      isActive
                        ? "scale-105 text-turquoise"
                        : "text-white/15 group-hover:text-turquoise/35"
                    }`}
                  >
                    {step.letter}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white transition-colors duration-300 group-hover:text-turquoise">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 transition-colors duration-300 group-hover:text-white/85">
                  {step.description}
                </p>

                <div
                  aria-hidden
                  className={`mt-6 h-px w-full bg-gradient-to-r from-turquoise/50 to-transparent transition-opacity duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
