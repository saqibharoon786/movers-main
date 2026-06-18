import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";

type Preset = {
  label: string;
  cd: number;
  acd: number;
  rd: number;
};

const PRESETS: Preset[] = [
  { label: "General Consumer Goods", cd: 20, acd: 4, rd: 10 },
  { label: "Electronics (Commercial)", cd: 20, acd: 4, rd: 15 },
  { label: "Laptop / Computer", cd: 0, acd: 0, rd: 0 },
  { label: "Vehicle 1500–1800cc", cd: 150, acd: 4, rd: 35 },
  { label: "Vehicle up to 1000cc", cd: 65, acd: 4, rd: 20 },
];

function formatPKR(n: number) {
  return `PKR ${Math.round(n).toLocaleString("en-PK")}`;
}

export default function ImportDutyCalculatorWidget() {
  const [cif, setCif] = useState(280000);
  const [cdRate, setCdRate] = useState(20);
  const [acdRate, setAcdRate] = useState(2);
  const [rdRate, setRdRate] = useState(10);
  const [stRate, setStRate] = useState(18);
  const [aitRate, setAitRate] = useState(5.5);
  const [whtRate, setWhtRate] = useState(5.5);
  const [registered, setRegistered] = useState(true);

  const result = useMemo(() => {
    const cifVal = Math.max(0, cif);
    const ait = registered ? aitRate : 8;
    const cd = cifVal * (cdRate / 100);
    const acd = cifVal * (acdRate / 100);
    const rd = cifVal * (rdRate / 100);
    const dutiable = cifVal + cd + acd + rd;
    const st = dutiable * (stRate / 100);
    const aitAmount = (cifVal + cd + acd + rd + st) * (ait / 100);
    const wht = cifVal * (whtRate / 100);
    const totalTax = cd + acd + rd + st + aitAmount + wht;
    return { cd, acd, rd, st, aitAmount, wht, totalTax, landing: cifVal + totalTax, ait };
  }, [cif, cdRate, acdRate, rdRate, stRate, aitRate, whtRate, registered]);

  const applyPreset = (p: Preset) => {
    setCdRate(p.cd);
    setAcdRate(p.acd);
    setRdRate(p.rd);
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 border border-gold/30 bg-navy-light/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
          <Calculator className="text-gold" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold text-foreground">Pakistan Import Duty Calculator</h2>
          <p className="text-sm text-muted-foreground">FBR-aligned estimate — enter CIF value in PKR</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {PRESETS.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => applyPreset(p)}
            className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-gold hover:text-gold transition-colors text-muted-foreground"
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <label className="block">
          <span className="text-sm font-medium text-foreground">CIF Value (PKR)</span>
          <input
            type="number"
            min={0}
            value={cif}
            onChange={(e) => setCif(Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-gold focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-foreground">Importer Status</span>
          <select
            value={registered ? "registered" : "unregistered"}
            onChange={(e) => setRegistered(e.target.value === "registered")}
            className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-gold focus:outline-none"
          >
            <option value="registered">ATL Registered (5.5% AIT)</option>
            <option value="unregistered">Unregistered / Non-ATL (8% AIT)</option>
          </select>
        </label>
        {[
          { label: "Customs Duty (CD) %", value: cdRate, set: setCdRate },
          { label: "Additional Customs Duty (ACD) %", value: acdRate, set: setAcdRate },
          { label: "Regulatory Duty (RD) %", value: rdRate, set: setRdRate },
          { label: "Sales Tax (ST) %", value: stRate, set: setStRate },
          { label: "Withholding Tax (WHT) %", value: whtRate, set: setWhtRate },
        ].map((field) => (
          <label key={field.label} className="block">
            <span className="text-sm font-medium text-foreground">{field.label}</span>
            <input
              type="number"
              min={0}
              step={0.5}
              value={field.value}
              onChange={(e) => field.set(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground focus:border-gold focus:outline-none"
            />
          </label>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-border rounded-lg text-sm">
          <thead>
            <tr className="bg-navy-light/40">
              <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Charge</th>
              <th className="border border-border px-4 py-3 text-right font-semibold text-foreground">Amount (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Customs Duty (CD)", result.cd],
              ["Additional Customs Duty (ACD)", result.acd],
              ["Regulatory Duty (RD)", result.rd],
              ["Sales Tax (ST)", result.st],
              [`Advance Income Tax (AIT ${result.ait}%)`, result.aitAmount],
              ["Withholding Tax (WHT)", result.wht],
            ].map(([label, amount]) => (
              <tr key={String(label)} className="bg-navy-light/10">
                <td className="border border-border px-4 py-2.5 text-muted-foreground">{label}</td>
                <td className="border border-border px-4 py-2.5 text-right text-foreground">{formatPKR(amount as number)}</td>
              </tr>
            ))}
            <tr className="bg-gold/10 font-semibold">
              <td className="border border-border px-4 py-3 text-foreground">Total Tax Payable</td>
              <td className="border border-border px-4 py-3 text-right text-gold">{formatPKR(result.totalTax)}</td>
            </tr>
            <tr className="bg-gold/20 font-bold">
              <td className="border border-border px-4 py-3 text-foreground">Total Landing Cost</td>
              <td className="border border-border px-4 py-3 text-right text-gold">{formatPKR(result.landing)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        *Indicative estimate only. Actual duty depends on PCT/HS code, applicable SROs, and FBR assessment at clearance.
      </p>
    </div>
  );
}
