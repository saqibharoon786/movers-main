import { useEffect, useRef, useState } from "react";

const ADSTERRA_SNIPPET = `
window.atOptions = {
  'key' : 'bb7b436f26b8aea23f1cb9269cccba95',
  'format' : 'iframe',
  'height' : 250,
  'width' : 300,
  'params' : {}
};
`;

export default function AdsterraBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasInjectedRef = useRef(false);
  const [status, setStatus] = useState<"loading" | "ready" | "fallback">("loading");

  useEffect(() => {
    if (typeof window === "undefined" || hasInjectedRef.current || !containerRef.current) {
      return;
    }

    hasInjectedRef.current = true;

    const initializer = document.createElement("script");
    initializer.type = "text/javascript";
    initializer.textContent = ADSTERRA_SNIPPET;

    const invoke = document.createElement("script");
    invoke.type = "text/javascript";
    invoke.async = true;
    invoke.defer = true;
    invoke.src = "https://www.highperformanceformat.com/bb7b436f26b8aea23f1cb9269cccba95/invoke.js";

    const handleLoad = () => {
      setStatus("ready");
    };

    const handleError = () => {
      setStatus("fallback");
    };

    invoke.addEventListener("load", handleLoad, { once: true });
    invoke.addEventListener("error", handleError, { once: true });

    document.body.appendChild(initializer);
    document.body.appendChild(invoke);

    const fallbackTimer = window.setTimeout(() => {
      setStatus("fallback");
    }, 4000);

    return () => {
      window.clearTimeout(fallbackTimer);
      invoke.removeEventListener("load", handleLoad);
      invoke.removeEventListener("error", handleError);
      initializer.remove();
      invoke.remove();
    };
  }, []);

  return (
    <div className="not-prose my-8 flex justify-center">
      <div className="w-full max-w-[300px] rounded-2xl border border-gold/20 bg-navy-light/20 px-3 py-4 shadow-sm">
        <div
          ref={containerRef}
          className="flex min-h-[250px] items-center justify-center overflow-hidden rounded-xl bg-background/70"
          style={{ width: "300px", height: "250px", margin: "0 auto" }}
        >
          {status === "loading" ? (
            <span className="px-4 text-center text-sm text-muted-foreground">Loading sponsored ad…</span>
          ) : status === "ready" ? (
            <span className="sr-only">Sponsored content</span>
          ) : (
            <span className="px-4 text-center text-sm text-muted-foreground">Sponsored placement</span>
          )}
        </div>
      </div>
    </div>
  );
}
