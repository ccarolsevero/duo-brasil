type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${
            light ? "text-turquoise" : "text-turquoise-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-extrabold leading-tight tracking-tight md:text-4xl ${
          light ? "text-white" : "text-blue-deep"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/75" : "text-text-dark"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
