import { cn } from "@/lib/lib";
import * as React from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground border-black placeholder:text-[#717171] selection:bg-primary selection:text-primary-foreground dark:bg-input/30 flex min-h-12 w-full min-w-0 border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-1 focus-visible:ring-none focus-visible:ring-0",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive selection:bg-primary selection:text-white",
        className
      )}
      {...props}
    />
  );
}

export { Input };
