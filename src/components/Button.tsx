import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "default" | "lg";
  external?: boolean;
  withArrow?: boolean;
  className?: string;
};

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={`h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 ${className}`}
    >
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  external = false,
  withArrow = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 font-semibold tracking-wide transition-all duration-300";

  const sizes = {
    default: "rounded-lg px-6 py-3.5 text-sm",
    lg: "rounded-xl px-8 py-4 text-[15px]",
  };

  const variants = {
    primary:
      "bg-turquoise text-blue-deep shadow-[0_4px_20px_rgba(18,198,194,0.2)] hover:bg-[#14d4cf] hover:shadow-[0_8px_28px_rgba(18,198,194,0.32)] hover:-translate-y-0.5 active:translate-y-0",
    secondary:
      "bg-blue-deep text-white hover:bg-blue-medium hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "border border-blue-deep/20 bg-transparent text-blue-deep hover:border-blue-deep hover:bg-white",
    ghost:
      "border border-white/30 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
