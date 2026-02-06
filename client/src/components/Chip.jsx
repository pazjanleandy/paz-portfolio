export default function Chip({
  children,
  onClick,
  active = false,
  className = "",
  title,
}) {
  const base =
    "inline-flex items-center rounded-full border px-3 py-1 text-xs shadow-sm ring-1 transition " +
    "select-none";

  const styles = active
    ? "border-slate-300/80 bg-white text-slate-900 ring-black/10"
    : "border-slate-200/70 bg-white/70 text-slate-700 ring-black/5";

  const hover = onClick
    ? "cursor-pointer hover:bg-white hover:border-slate-300/80 active:scale-[0.99]"
    : "";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        title={title}
        className={`${base} ${styles} ${hover} ${className}`}
      >
        {children}
      </button>
    );
  }

  return <span className={`${base} ${styles} ${className}`}>{children}</span>;
}
