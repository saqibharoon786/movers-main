import { useState, type FormEvent } from "react";
import { Send, Loader2 } from "lucide-react";
import { readQuoteFormFromForm, submitQuoteForm } from "@/lib/quoteForm";

const inputClass =
  "w-full bg-navy-mid border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors";

type Props = {
  /** Shown in the email subject line */
  source: string;
  variant?: "full" | "hero";
  submitLabel?: string;
  className?: string;
  onSuccess?: () => void;
};

const QuoteRequestForm = ({
  source,
  variant = "full",
  submitLabel = "Request Free Quote",
  className = "space-y-5",
  onSuccess,
}: Props) => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = readQuoteFormFromForm(form);

    if (!data.name || !data.email) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await submitQuoteForm({ ...data, source });

    if (result.ok) {
      setStatus("success");
      form.reset();
      onSuccess?.();
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("error");
    setErrorMessage(result.error);
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <input type="hidden" name="source" value={source} />

      <div className={variant === "hero" ? "grid sm:grid-cols-2 gap-4" : "grid sm:grid-cols-2 gap-5"}>
        <input type="text" name="name" placeholder="Full Name" required autoComplete="name" className={inputClass} />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div className={variant === "hero" ? "grid sm:grid-cols-2 gap-4" : "grid sm:grid-cols-2 gap-5"}>
        <input type="tel" name="phone" placeholder="Phone Number" required autoComplete="tel" className={inputClass} />
        <select name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            Service Type
          </option>
          <option value="International Moving">International Moving</option>
          <option value="Local / Intercity Moving">Local / Intercity Moving</option>
          <option value="Air Freight">Air Freight</option>
          <option value="Sea Freight">Sea Freight</option>
          <option value="Customs Clearance">Customs Clearance</option>
          <option value="Vehicle Shipping">Vehicle Shipping</option>
          <option value="Storage / Packing">Storage / Packing</option>
          <option value="Packing Only">Packing Only</option>
        </select>
      </div>

      <div className={variant === "hero" ? "grid sm:grid-cols-2 gap-4" : "grid sm:grid-cols-2 gap-5"}>
        <input type="text" name="movingFrom" placeholder="Moving From (City)" className={inputClass} />
        <input
          type="text"
          name="movingTo"
          placeholder={variant === "hero" ? "Moving To (City)" : "Moving To (City, Country)"}
          className={inputClass}
        />
      </div>

      {variant === "full" && (
        <input
          type="text"
          name="volume"
          placeholder="Approximate Volume (CBM) or Number of Rooms"
          className={inputClass}
        />
      )}

      <textarea
        name="message"
        rows={variant === "hero" ? 3 : 4}
        placeholder="Tell us about your move..."
        className={`${inputClass} resize-none`}
      />

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}
        </p>
      )}

      {status === "success" && (
        <p className="text-sm text-gold" role="status">
          Thank you! Your quote request was sent. We will contact you within 24 hours (usually within 2 hours).
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 rounded-lg gold-gradient-bg text-primary-foreground font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_40px_-5px_hsl(var(--gold)/0.5)] transition-all duration-300 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : status === "success" ? (
          "Quote Request Sent ✓"
        ) : (
          <>
            <Send size={18} /> {submitLabel}
          </>
        )}
      </button>
    </form>
  );
};

export default QuoteRequestForm;
