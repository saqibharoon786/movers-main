import { useEffect, useRef } from "react";

const ADSTERRA_INITIALIZER = `
atOptions = {
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

  useEffect(() => {
    if (typeof window === "undefined" || hasInjectedRef.current || !containerRef.current) {
      return;
    }

    hasInjectedRef.current = true;

    const initializer = document.createElement("script");
    initializer.type = "text/javascript";
    initializer.textContent = ADSTERRA_INITIALIZER;

    const invoke = document.createElement("script");
    invoke.src = "https://www.highperformanceformat.com/bb7b436f26b8aea23f1cb9269cccba95/invoke.js";
    invoke.async = true;
    invoke.defer = true;

    containerRef.current.appendChild(initializer);
    containerRef.current.appendChild(invoke);

    return () => {
      initializer.remove();
      invoke.remove();
    };
  }, []);

  return (
    <div className="not-prose my-8 flex justify-center">
      <div className="w-full max-w-[300px] rounded-2xl border border-gold/20 bg-navy-light/20 px-3 py-4 shadow-sm">
        <div ref={containerRef} className="flex min-h-[250px] items-center justify-center overflow-hidden rounded-xl bg-background/70">
          <span className="sr-only">Sponsored content</span>
        </div>
      </div>
    </div>
  );
}
