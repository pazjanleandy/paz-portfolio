import Chip from "../chip";
import { ArrowSquareOut, GithubLogo, Sparkle } from "phosphor-react";

export default function ProjectCard({ project, selected = false, onSelect }) {
  const hasMedia = project?.video?.thumbnail;

  const thumbnailClass = selected
    ? "h-full w-full object-cover object-center opacity-95 saturate-100 contrast-100 transition"
    : "h-full w-full object-cover object-center opacity-80 saturate-75 contrast-90 grayscale transition group-hover:opacity-90";

  return (
    <article
      onClick={() => onSelect?.(project.title)}
      className={[
        "group cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition",
        "border-slate-200/70 hover:-translate-y-0.5 hover:shadow-md",
        selected ? "ring-2 ring-slate-900/10 border-slate-900/20" : "ring-1 ring-black/5",
      ].join(" ")}
    >
      {/* Full bleed top media */}
      {hasMedia ? (
        <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
          <img
            src={project.video.thumbnail}
            alt={project.video.title || `${project.title} demo`}
            className={thumbnailClass}
            loading="lazy"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="aspect-video w-full bg-slate-200" />
      )}

      {/* content */}
      <div className="flex flex-col p-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-orange-600">
          {project.category || "Project"}
        </div>

        <h3 className="mt-1.5 text-base font-bold leading-snug text-slate-900">
          {project.title}
        </h3>

        <p className="mt-2 text-[13px] leading-relaxed text-slate-600 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {(project.tech || []).slice(0, 6).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>

        <div className="mt-3">
          <div className="flex items-center justify-between gap-3 border-t border-slate-200/70 pt-3">
            <span className="text-[11px] font-semibold text-slate-700">
              {project.author || "Jan Leandy Paz"}
            </span>

            <div className="flex items-center gap-2">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[11px] font-semibold text-slate-700 hover:bg-slate-50"
                >
                  <GithubLogo size={12} />
                  Repo
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-2.5 py-1.5 text-[11px] font-semibold text-white hover:bg-slate-800"
                >
                  <ArrowSquareOut size={12} />
                  Live
                </a>
              ) : null}
            </div>
          </div>

          {selected ? (
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-semibold text-white shadow-sm ring-1 ring-emerald-700/30">
              <Sparkle size={12} weight="fill" />
              Currently featured
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
