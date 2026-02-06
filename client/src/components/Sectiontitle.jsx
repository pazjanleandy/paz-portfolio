export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mb-10">
      {kicker ? (
        <p className="text-xs font-semibold tracking-wider text-slate-500">
          {kicker.toUpperCase()}
        </p>
      ) : null}

      <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-3 max-w-2xl text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
