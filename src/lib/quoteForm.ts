/** All website quote / contact form submissions are delivered here. */
export const QUOTE_INBOX_EMAIL = "bestinternationalmoverslogisti@gmail.com";

export type QuoteFormData = {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  movingFrom?: string;
  movingTo?: string;
  volume?: string;
  message?: string;
  /** Where the user submitted from (homepage hero, footer, contact page, etc.) */
  source?: string;
};

export async function submitQuoteForm(
  data: QuoteFormData,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(QUOTE_INBOX_EMAIL)}`;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New Quote Request — ${data.source || "bestintlmovers.com"}`,
        _template: "table",
        _captcha: "false",
        Name: data.name,
        Email: data.email,
        Phone: data.phone?.trim() || "Not provided",
        "Service Type": data.service?.trim() || "Not specified",
        "Moving From": data.movingFrom?.trim() || "—",
        "Moving To": data.movingTo?.trim() || "—",
        Volume: data.volume?.trim() || "—",
        Message: data.message?.trim() || "—",
        "Form Source": data.source || "Website",
        "Page URL": typeof window !== "undefined" ? window.location.href : "",
        "Submitted At": new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" }),
      }),
    });

    const result = (await response.json()) as { success?: string; message?: string };

    if (response.ok && result.success === "true") {
      return { ok: true };
    }

    return {
      ok: false,
      error: result.message || "Could not send your request. Please call 0300-9130211 or WhatsApp us.",
    };
  } catch {
    return {
      ok: false,
      error: "Network error. Please try again or contact us on WhatsApp: 0300-9130211.",
    };
  }
}

export const readQuoteFormFromForm = (form: HTMLFormElement): QuoteFormData => {
  const fd = new FormData(form);
  const text = (key: string) => {
    const v = fd.get(key);
    return typeof v === "string" ? v.trim() : "";
  };

  return {
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    service: text("service"),
    movingFrom: text("movingFrom"),
    movingTo: text("movingTo"),
    volume: text("volume"),
    message: text("message"),
    source: text("source") || undefined,
  };
};
