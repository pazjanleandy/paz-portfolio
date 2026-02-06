import { useEffect, useMemo, useState } from "react";

const DEFAULT_SKILLS = [
  "Python",
  "Java",
  "CNNs",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git/GitHub",
  "Basic QA",
];

const SNIPPETS = {
  Python: {
    tag: "PYTHON",
    level: "Software Engineering",
    pills: ["Data pipeline", "Metrics-first", "Clean modules"],
    lines: [
      "from glob import glob",
      "",
      "def build_dataset(images_dir: str) -> list[str]:",
      "    # simple, repeatable pipeline",
      "    paths = sorted(glob(f\"{images_dir}/*.jpg\"))",
      "    return paths",
      "",
      "def train(model, loader, epochs=10):",
      "    best = 0.0",
      "    for epoch in range(epochs):",
      "        acc = run_epoch(model, loader)",
      "        best = max(best, acc)",
      "        print(f\"epoch={epoch:02d} acc={acc:.3f} best={best:.3f}\")",
    ],
    footer: "python • reproducible pipelines • clear logs",
  },

  Java: {
    tag: "JAVA",
    level: "Software Engineering",
    pills: ["OOP design", "Clean interfaces", "Validation"],
    lines: [
      "public interface Validator<T> {",
      "  ValidationResult validate(T input);",
      "}",
      "",
      "public final class EmailValidator implements Validator<String> {",
      "  @Override",
      "  public ValidationResult validate(String input) {",
      "    if (input == null || !input.contains(\"@\")) return fail(\"Invalid email\");",
      "    return ok();",
      "  }",
      "}",
    ],
    footer: "java • interfaces • readable constraints",
  },

  CNNs: {
    tag: "CNNs / CV",
    level: "AI",
    pills: ["Training loop", "Evaluation-ready", "Dataset quality"],
    lines: [
      "epoch 06/20  loss=0.412  acc=0.883  f1=0.871",
      "val           loss=0.438  acc=0.864  f1=0.852",
      "",
      "[notes]",
      "- check class imbalance",
      "- add augmentation (flip/rotate)",
      "- track confusion matrix per run",
      "",
      "save_checkpoint(best='val_f1')",
    ],
    footer: "cnn • evaluation • dataset discipline",
  },

  HTML: {
    tag: "HTML",
    level: "UI",
    pills: ["Semantic", "Accessible", "Readable"],
    lines: [
      "<main>",
      "  <section aria-labelledby=\"projects\">",
      "    <h2 id=\"projects\">Projects</h2>",
      "    <article>",
      "      <h3>Throwaway</h3>",
      "      <p>Automated waste classification using CNN.</p>",
      "    </article>",
      "  </section>",
      "</main>",
    ],
    footer: "html • semantic structure • accessibility",
  },

  CSS: {
    tag: "CSS",
    level: "UI",
    pills: ["Layout", "Spacing", "Clarity"],
    lines: [
      ".card {",
      "  border-radius: 16px;",
      "  box-shadow: 0 20px 50px rgba(2, 6, 23, .08);",
      "  backdrop-filter: blur(10px);",
      "}",
      "",
      ".stack > * + * {",
      "  margin-top: 12px;",
      "}",
    ],
    footer: "css • spacing rhythm • clean surfaces",
  },

  JavaScript: {
    tag: "JAVASCRIPT",
    level: "Software Engineering",
    pills: ["State", "Utilities", "Ship features"],
    lines: [
      "export function clamp(n, min, max) {",
      "  return Math.max(min, Math.min(max, n));",
      "}",
      "",
      "const status = mapExcelStatus(row.status);",
      "assert(status === 'Pending');",
    ],
    footer: "js • utilities • predictable behavior",
  },

  React: {
    tag: "REACT",
    level: "UI",
    pills: ["Components", "Reuse", "Fast iteration"],
    lines: [
      "function ProjectCard({ project, onSelect }) {",
      "  return (",
      "    <button onClick={() => onSelect(project.title)}>",
      "      <h3>{project.title}</h3>",
      "      <p>{project.description}</p>",
      "    </button>",
      "  );",
      "}",
    ],
    footer: "react • component structure • clean props",
  },

  Tailwind: {
    tag: "TAILWIND",
    level: "UI",
    pills: ["Consistency", "Design system", "Speed"],
    lines: [
      "<div className=\"rounded-2xl bg-white/60 ring-1 ring-black/5 backdrop-blur\">",
      "  <h3 className=\"text-lg font-semibold\">Projects</h3>",
      "  <p className=\"text-sm text-slate-600\">Clean cards, consistent spacing.</p>",
      "</div>",
    ],
    footer: "tailwind • consistent tokens • fast styling",
  },

  "Git/GitHub": {
    tag: "GIT",
    level: "Workflow",
    pills: ["Clean commits", "Branches", "Deploy"],
    lines: [
      "$ git checkout -b feature/project-cards",
      "$ git add .",
      "$ git commit -m \"projects: add featured showcase\"",
      "$ git push -u origin feature/project-cards",
      "",
      "# open PR → review → merge → deploy",
    ],
    footer: "git • small commits • reproducible history",
  },

  "Basic QA": {
    tag: "QA",
    level: "Testing",
    pills: ["Repro steps", "Expected vs actual", "Regression"],
    lines: [
      "TEST CASE: Import should preserve status",
      "--------------------------------------",
      "1) Prepare Excel row: Status=Pending",
      "2) Import file",
      "3) Open record in system",
      "",
      "Expected: Status remains Pending",
      "Actual:   Status becomes Approved",
      "",
      "Notes: add regression test for status mapping",
    ],
    footer: "qa • clear reproduction • testable requirements",
  },
};

function Pill({ children, className = "" }) {
  return (
    <span
      className={
        "inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 " +
        className
      }
    >
      {children}
    </span>
  );
}

function badgeForTag(tag) {
  const t = (tag || "").toLowerCase();
  if (t.includes("qa")) return "bg-emerald-500/15 text-emerald-200 ring-emerald-400/25";
  if (t.includes("cnn") || t.includes("cv") || t.includes("ai"))
    return "bg-sky-500/15 text-sky-200 ring-sky-400/25";
  if (t.includes("java")) return "bg-amber-500/15 text-amber-200 ring-amber-400/25";
  if (t.includes("python")) return "bg-violet-500/15 text-violet-200 ring-violet-400/25";
  return "bg-slate-500/15 text-slate-200 ring-slate-400/25";
}

export default function AsciiTerminal({
  title = "Skills Snapshot",
  skills = DEFAULT_SKILLS,
  activeKey,
  typeMs = 14,
}) {
  const list = useMemo(() => {
    const uniq = Array.from(new Set((skills || []).filter(Boolean)));
    const supported = uniq.filter((s) => SNIPPETS[s]);
    return supported.length ? supported : ["Basic QA"];
  }, [skills]);

  const resolvedKey = useMemo(() => {
    if (activeKey && SNIPPETS[activeKey] && list.includes(activeKey)) return activeKey;
    return list[0];
  }, [activeKey, list]);

  const active = SNIPPETS[resolvedKey];
  const fullText = (active?.lines || []).join("\n");

  const [typed, setTyped] = useState("");

  // typewriter on change (async reset = no warning)
  useEffect(() => {
    let i = 0;
    let intervalId = null;

    const startId = setTimeout(() => {
      setTyped("");

      intervalId = setInterval(() => {
        i += 1;
        setTyped(fullText.slice(0, i));
        if (i >= fullText.length) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }, typeMs);
    }, 0);

    return () => {
      clearTimeout(startId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [fullText, typeMs]);

  if (!active) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-b from-slate-950 to-slate-900 text-slate-100 shadow-sm ring-1 ring-black/10">
      {/* header */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
        </div>
        <p className="text-xs font-semibold text-slate-200/90">{title}</p>
      </div>

      {/* body */}
      <div className="relative p-4">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
        </div>

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <Pill className="bg-white/10 text-slate-100 ring-white/15">{resolvedKey}</Pill>
            <Pill className={badgeForTag(active.tag)}>{active.tag}</Pill>
            <Pill className="bg-white/10 text-slate-100 ring-white/15">{active.level}</Pill>
          </div>

          {active.pills?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {active.pills.slice(0, 3).map((p) => (
                <Pill key={p} className="bg-white/5 text-slate-200 ring-white/10">
                  {p}
                </Pill>
              ))}
            </div>
          ) : null}

          <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
            <pre className="whitespace-pre-wrap font-mono text-[12px] leading-relaxed text-slate-100">
              {typed}
              <span className="ml-0.5 inline-block w-2 animate-pulse text-slate-300">▋</span>
            </pre>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] text-slate-300/80">
            <span>{active.footer}</span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300/90" />
              live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
