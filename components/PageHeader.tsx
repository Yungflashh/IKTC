import clsx from "clsx";
import { Reveal } from "./Motion";

export default function PageHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <section className="pt-8 md:pt-16 pb-8 md:pb-14">
      <div className="container">
        <Reveal>
          <div
            className={clsx(
              "max-w-3xl",
              align === "center" && "mx-auto text-center"
            )}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="h-display mt-3 text-5xl md:text-6xl leading-[1] tracking-tightest text-ink">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-lg text-ink/70 leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
