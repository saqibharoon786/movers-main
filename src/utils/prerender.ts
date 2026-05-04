let renderEventQueued = false;

/**
 * Notify react-snap only after route SEO/meta updates settle.
 * Multiple callers are coalesced into a single event dispatch.
 */
export const notifyPrerenderReady = () => {
  if (typeof document === "undefined") return;
  if (renderEventQueued) return;

  renderEventQueued = true;
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.dispatchEvent(new Event("render-event"));
      renderEventQueued = false;
    });
  });
};
