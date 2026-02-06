import { useMemo, useState } from "react";
import Chip from "../Chip";
import ProjectMedia from "../ProjectMedia";
import Modal from "../Modal";
import {
  GithubLogo,
  ArrowSquareOut,
  Sparkle,
  Star,
  ImageSquare,
  CaretLeft,
  CaretRight,
  CaretDown,
} from "phosphor-react";

function Metric({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200/70 bg-white/60 px-3 py-2 text-xs text-slate-700 shadow-sm ring-1 ring-black/5">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
      {children}
    </div>
  );
}

const engineeringNotesByTitle = {
  "Throwaway: Automated Waste Classification using CNN": {
    summary:
      "End-to-end system thinking: data, training, inference, and hardware reliability.",
    sections: [
      {
        title: "Why I did it (engineering intent)",
        items: [
          "Solve a real-world problem where accuracy and speed matter in sorting waste.",
          "Prove I can build an end-to-end pipeline, not just train a model in isolation.",
          "Practice tradeoffs between accuracy, latency, hardware limits, and mechanical design.",
        ],
      },
      {
        title: "What it does (high-level pipeline)",
        items: [
          "Captures waste images, runs a CNN classifier, outputs a predicted class, and triggers a sorting mechanism.",
          "Automates segregation decisions so the mechanical step is consistent and repeatable.",
        ],
      },
      {
        title: "Future updates and optimizations",
        items: [
          "Redesign the conveyor belt to be more compact for a consistent capture zone.",
          "Build a clearer operator dashboard with live feed, confidence, throughput, errors, and manual override.",
          "Switch Arduino to ESP32 for wireless monitoring, remote updates, and cleaner wiring.",
          "Add a Battery Management System for safe portable demos and battery protection.",
        ],
      },
      {
        title: "Extra expansion ideas",
        items: [
          "Improve reliability with controlled lighting and a simple enclosure.",
          "Add a reject or unknown class using confidence thresholds to avoid confident errors.",
          "Expand dataset diversity to reduce mismatch in real environments.",
        ],
      },
    ],
  },
  Hysteria: {
    summary:
      "Controlled randomness for replayability without heavy procedural costs.",
    sections: [
      {
        title: "Why I did it (engineering intent)",
        items: [
          "Create replayability without expensive procedural generation on mobile.",
          "Apply algorithms meaningfully for controlled randomness and pacing.",
          "Practice optimization under mobile constraints and small asset budgets.",
        ],
      },
      {
        title: "What it does (high-level pipeline)",
        items: [
          "Uses Fisher–Yates shuffle to randomize objectives and enemy positions while keeping level structure stable.",
          "Produces variation each run while staying predictable and performant to debug.",
        ],
      },
      {
        title: "Future updates and optimizations",
        items: [
          "Add rule layers on top of shuffles to control pacing and safety zones.",
          "Shuffle event chunks like triggers, audio cues, and micro-scripts for richer variety.",
          "Run a mobile performance pass: textures, audio compression, shaders, and baked lighting.",
          "Stabilize assets and memory with pooling, addressables, and reduced instantiation spikes.",
        ],
      },
      {
        title: "Extra expansion ideas",
        items: [
          "Add a debug seed system so a run can be reproduced for testing.",
          "Collect telemetry to refine encounter pacing and difficulty curves.",
        ],
      },
    ],
  },
  Bookbound: {
    summary:
      "Product thinking and UX for a subscription model around local and academic texts.",
    sections: [
      {
        title: "Why I did it (engineering intent)",
        items: [
          "Translate a real user need into a clear subscription model and UX flow.",
          "Communicate a pitch-ready product concept, not just a coded prototype.",
          "Explore marketplace UX challenges like trust, discovery, and retention.",
        ],
      },
      {
        title: "What it does (prototype scope)",
        items: [
          "Subscription app concept focused on local and academic textbooks.",
          "Prototype designed to communicate value and the user journey clearly.",
        ],
      },
      {
        title: "Future updates and optimizations",
        items: [
          "Expand Figma flows with onboarding, payment states, offline, and edge cases.",
          "Build a thin-slice MVP: auth, catalog browsing, and bookmarking/logging.",
          "Introduce a reading log to drive retention before full social features.",
        ],
      },
      {
        title: "Extra expansion ideas",
        items: [
          "Add simple recommendations like course-based suggestions.",
          "Improve trust signals with edition info and academic filters.",
        ],
      },
    ],
  },
};

export default function ProjectShowcase({ project, innerRef }) {
  const [shotsOpen, setShotsOpen] = useState(false);
  const [shotIndex, setShotIndex] = useState(0);

  const shots = useMemo(() => project?.screenshots || [], [project]);
  const hasShots = shots.length > 0;

  const notes = useMemo(() => {
    if (!project) return null;
    return engineeringNotesByTitle[project.title] || null;
  }, [project]);

  function openShots() {
    setShotIndex(0);
    setShotsOpen(true);
  }

  function prevShot() {
    setShotIndex((i) => (i - 1 + shots.length) % shots.length);
  }

  function nextShot() {
    setShotIndex((i) => (i + 1) % shots.length);
  }

  if (!project) return null;

  return (
    <>
      <div
        ref={innerRef}
        className="mt-8 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/55 backdrop-blur shadow-sm ring-1 ring-black/5"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            {project.video?.thumbnail ? (
              <ProjectMedia
                thumbnail={project.video.thumbnail}
                youtubeUrl={project.video.youtubeUrl}
                title={project.video.title || `${project.title} demo`}
              />
            ) : (
              <div className="aspect-video w-full bg-slate-200" />
            )}

            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900 ring-1 ring-black/5 backdrop-blur">
              <Star size={14} weight="fill" className="text-amber-500" />
              Featured
            </div>
          </div>

          <div className="flex flex-col p-7 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <Sparkle size={14} weight="fill" className="text-emerald-600" />
              {project.category || "Project"}
            </div>

            <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {project.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>

            {project.metrics?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.metrics.map((m) => (
                  <Metric key={m}>{m}</Metric>
                ))}
              </div>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech?.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              {project.repoUrl ? (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
                >
                  <GithubLogo size={16} /> GitHub
                </a>
              ) : null}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
                >
                  <ArrowSquareOut size={16} /> Live
                </a>
              ) : null}

              {hasShots ? (
                <button
                  type="button"
                  onClick={openShots}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300/70 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white"
                >
                  <ImageSquare size={16} /> View screenshots
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {notes ? (
        <div className="mt-6 rounded-3xl border border-slate-200/70 bg-white/60 p-5 shadow-sm ring-1 ring-black/5 sm:p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Engineering notes
          </div>
          <div className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
            {project.title}
          </div>

          <ul className="mt-3 list-disc pl-5 text-sm text-slate-600">
            <li>{notes.summary}</li>
          </ul>

          <div className="mt-5 grid items-start gap-3 lg:grid-cols-2">
            {notes.sections.map((section) => (
              <details
                key={section.title}
                className="group h-fit self-start rounded-2xl border border-slate-200/60 bg-white/80 p-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-800 [&::-webkit-details-marker]:hidden">
                  <span>{section.title}</span>
                  <CaretDown
                    size={16}
                    className="text-slate-500 transition group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      ) : null}

      {hasShots ? (
        <Modal
          open={shotsOpen}
          title={`${project.title} screenshots`}
          onClose={() => setShotsOpen(false)}
        >
          <div className="p-4 sm:p-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <img
                src={shots[shotIndex]}
                alt={`${project.title} screenshot ${shotIndex + 1}`}
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>

            {shots.length > 1 ? (
              <div className="mt-4 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={prevShot}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/15"
                >
                  <CaretLeft size={16} /> Prev
                </button>

                <div className="text-xs text-white/70">
                  {shotIndex + 1} / {shots.length}
                </div>

                <button
                  type="button"
                  onClick={nextShot}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/15"
                >
                  Next <CaretRight size={16} />
                </button>
              </div>
            ) : null}
          </div>
        </Modal>
      ) : null}
    </>
  );
}
