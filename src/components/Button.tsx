import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold tracking-wide transition";

  const variants = {
    primary: "bg-turquoise text-blue-deep hover:bg-turquoise/90",
    secondary: "bg-blue-deep text-white hover:bg-blue-medium",
    outline:
      "border border-blue-deep/20 bg-transparent text-blue-deep hover:border-blue-deep hover:bg-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
