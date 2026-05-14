import { useEffect, useRef } from "react";

declare global {
  interface Window {
    renderMathInElement?: (
      el: HTMLElement,
      opts?: {
        delimiters?: { left: string; right: string; display: boolean }[];
        throwOnError?: boolean;
        ignoredTags?: string[];
      },
    ) => void;
  }
}

function renderMath(el: HTMLElement) {
  const fn = window.renderMathInElement;
  if (!fn) return;
  fn(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false },
    ],
    throwOnError: false,
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
  });
}

export function MathText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    const tryRender = (attempt = 0) => {
      if (cancelled) return;
      if (window.renderMathInElement) {
        renderMath(el);
      } else if (attempt < 40) {
        setTimeout(() => tryRender(attempt + 1), 100);
      }
    };
    tryRender();
    return () => {
      cancelled = true;
    };
  }, [children]);

  return (
    <div
      ref={ref}
      className={
        className ??
        "whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-stone-800"
      }
    >
      {children}
    </div>
  );
}
