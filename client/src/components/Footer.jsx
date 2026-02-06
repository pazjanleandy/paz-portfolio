const LAST_UPDATED = "2026-02-05";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200/70 bg-white/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 pt-10 pb-[calc(2.5rem+env(safe-area-inset-bottom))] sm:px-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600">
            (c) {new Date().getFullYear()} Jan Leandy Paz.
          </p>

          <p className="text-sm text-slate-600">
            Built with <span className="font-medium text-slate-900">React</span> +{" "}
            <span className="font-medium text-slate-900">Tailwind</span>.
            {LAST_UPDATED ? (
              <span className="text-slate-400"> - Last updated: {LAST_UPDATED}</span>
            ) : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
