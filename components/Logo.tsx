import Link from "next/link";
import clsx from "clsx";

export default function Logo({
  variant = "dark",
  href = "/",
  className,
}: {
  variant?: "dark" | "light";
  href?: string | null;
  className?: string;
}) {
  const inner = (
    <span
      className={clsx(
        "inline-flex items-center gap-2 font-display font-semibold tracking-tight",
        variant === "dark" ? "text-ink" : "text-canvas",
        className
      )}
    >
      <span
        className={clsx(
          "relative grid h-9 w-9 place-items-center rounded-xl",
          variant === "dark" ? "bg-ink text-canvas" : "bg-canvas text-ink"
        )}
      >
        <span className="text-sm font-bold">IK</span>
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand ring-2 ring-canvas" />
      </span>
      <span className="text-[15px] leading-tight">
        Ikorodu Tech<span className="opacity-60"> · Community</span>
      </span>
    </span>
  );
  if (!href) return inner;
  return (
    <Link href={href} aria-label="Ikorodu Tech Community">
      {inner}
    </Link>
  );
}
