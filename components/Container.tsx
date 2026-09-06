import { HTMLAttributes } from "react";
import clsx from "clsx";

export default function Container({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("container", className)} {...props}>
      {children}
    </div>
  );
}
