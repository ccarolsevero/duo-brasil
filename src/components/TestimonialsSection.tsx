import { SectionHeading } from "@/components/SectionHeading";
import type { Testimonial } from "@/lib/site-data";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

function getVideoEmbedUrl(url: string): string | null {
  if (!url) return null;

  if (url.includes("youtube.com/embed/") || url.includes("player.vimeo.com")) {
    return url;
  }

  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]{11})/,
  );

  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }

  return url;
}

function VideoCard({ testimonial }: { testimonial: Testimonial }) {
  const embedUrl = getVideoEmbedUrl(testimonial.videoUrl);
  const isFile = embedUrl?.match(/\.(mp4|webm|mov)(\?|$)/i);

  return (
    <article className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
      <div
        className={
          isFile
            ? "flex w-full items-center justify-center bg-[#eef2f6]"
            : "relative aspect-video w-full bg-blue-deep/5"
        }
      >
        {embedUrl && isFile ? (
          <video
            src={embedUrl}
            controls
            playsInline
            preload="metadata"
            className="h-auto w-full object-contain"
            title={`Depoimento de ${testimonial.name}`}
          />
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            title={`Depoimento de ${testimonial.name}`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-blue-deep/15 bg-white text-blue-deep">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-6 w-6">
                <path d="M8 5v14l11-7L8 5z" />
              </svg>
            </span>
            <p className="text-sm font-medium text-text-dark">Vídeo em breve</p>
          </div>
        )}
      </div>

      <div className="border-t border-border px-5 py-4">
        <p className="font-bold text-blue-deep">{testimonial.name}</p>
        <p className="mt-1 text-sm text-text-dark">{testimonial.company}</p>
      </div>
    </article>
  );
}

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section id="depoimentos" className="bg-[#f7fafc] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Quem confia na DUO Brasil conta a própria história"
          description="Clientes de diferentes segmentos compartilham como o Método E.P.I.C™ transformou seus resultados em marketing."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((testimonial) => (
            <VideoCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
