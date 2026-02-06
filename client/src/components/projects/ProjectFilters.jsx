import { FunnelSimple } from "phosphor-react";

const FILTERS = ["All", "AI", "Software", "QA", "Game"];

function Pill({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition",
        active
          ? "border-slate-900/10 bg-slate-900 text-white shadow-sm"
          : "border-slate-200/70 bg-white/60 text-slate-700 hover:bg-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

export default function ProjectFilters({ value, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
        <FunnelSimple size={14} /> Filter:
      </span>

      {FILTERS.map((f) => (
        <Pill key={f} active={value === f} onClick={() => onChange(f)}>
          {f}
        </Pill>
      ))}
    </div>
  );
}
