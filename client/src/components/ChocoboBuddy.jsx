import { useEffect, useState } from "react";

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

const KWEH_OPTIONS = ["Kweh!", "KWEH!", "kweh...", "kweh?"];

function makeBurst() {
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now() + Math.random());

  const particles = Array.from({ length: 7 }).map((_, i) => ({
    key: `${id}-${i}`,
    x: rand(-26, 26),
    y: rand(-30, -10),
    s: rand(0.85, 1.25),
    d: rand(0.9, 1.2),
    r: rand(-25, 25),
    o: rand(0.8, 1),
  }));

  return { id, particles };
}

export default function ChocoboBuddy({
  label = "Say hi 👋",
  message = "If you’re hiring or want to collaborate, feel free to message me.",
}) {
  const [kweh, setKweh] = useState(false);
  const [kwehText, setKwehText] = useState("Kweh!");
  const [bursts, setBursts] = useState([]);

  // auto-hide bubble
  useEffect(() => {
    if (!kweh) return;
    const t = setTimeout(() => setKweh(false), 1200);
    return () => clearTimeout(t);
  }, [kweh]);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onClickChoco = () => {
    setKwehText(KWEH_OPTIONS[Math.floor(Math.random() * KWEH_OPTIONS.length)]);
    setKweh(true);

    if (reducedMotion) return;

    const b = makeBurst();
    setBursts((prev) => [b, ...prev].slice(0, 3));
    setTimeout(() => {
      setBursts((prev) => prev.filter((x) => x.id !== b.id));
    }, 900);
  };

  return (
    <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 backdrop-blur shadow-sm ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-slate-200/60 px-4 py-3">
        <p className="text-xs font-semibold tracking-wide text-slate-700">{label}</p>
        <span className="text-[11px] text-slate-500">kweh mode</span>
      </div>

      <div className="px-4 py-5">
        <div className="flex items-center gap-4">
          {/* Clickable chocobo */}
          <button
            type="button"
            onClick={onClickChoco}
            className="group relative shrink-0 rounded-xl p-1 focus:outline-none focus:ring-4 focus:ring-slate-200"
            aria-label="Click the chocobo"
          >
            <div className="choco-bob relative">
              {/* Pixel Chocobo (no black square; crisp edges) */}
              <svg
                className="h-16 w-16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="crispEdges"
                aria-hidden="true"
              >
                {/* ground shadow */}
                <rect x="3" y="14" width="10" height="1" fill="rgba(15,23,42,0.14)" />

                {/* spiky bushy tail (yellow) */}
                <rect x="12" y="9" width="1" height="1" fill="#FACC15" />
                <rect x="13" y="9" width="1" height="1" fill="#FACC15" />
                <rect x="14" y="10" width="1" height="1" fill="#FACC15" />
                <rect x="13" y="10" width="1" height="1" fill="#FDE047" />
                <rect x="12" y="10" width="1" height="1" fill="#FDE047" />
                <rect x="14" y="11" width="1" height="1" fill="#FACC15" />
                <rect x="13" y="11" width="1" height="1" fill="#FACC15" />
                <rect x="12" y="11" width="1" height="1" fill="#FDE047" />

                {/* body */}
                <rect x="6" y="8" width="7" height="5" fill="#FACC15" />
                <rect x="7" y="7" width="5" height="1" fill="#FACC15" />

                {/* belly highlight */}
                <rect x="7" y="10" width="4" height="2" fill="#FEF08A" />

                {/* legs */}
                <rect x="7" y="13" width="1" height="1" fill="#0F172A" />
                <rect x="10" y="13" width="1" height="1" fill="#0F172A" />

                {/* head */}
                <rect x="2" y="6" width="5" height="4" fill="#FACC15" />
                <rect x="3" y="5" width="3" height="1" fill="#FACC15" />

                {/* spiky hair/crest */}
                <rect x="2" y="4" width="1" height="1" fill="#FACC15" />
                <rect x="3" y="4" width="1" height="1" fill="#FDE047" />
                <rect x="4" y="4" width="1" height="1" fill="#FACC15" />
                <rect x="5" y="4" width="1" height="1" fill="#FDE047" />
                <rect x="6" y="5" width="1" height="1" fill="#FACC15" />

                {/* beak */}
                <rect x="1" y="8" width="2" height="2" fill="#FB923C" />

                {/* blue eye */}
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />

                {/* tiny pupil */}
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />
                <rect x="5" y="7" width="1" height="1" fill="#2563EB" />

                {/* simple shading */}
                <rect x="6" y="12" width="7" height="1" fill="rgba(15,23,42,0.12)" />
                <rect x="2" y="9" width="5" height="1" fill="rgba(15,23,42,0.10)" />
              </svg>

              {/* wing flap overlay */}
              <div className="choco-wing pointer-events-none absolute left-7 top-10 h-6 w-6 origin-left">
                <svg
                  viewBox="0 0 16 16"
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="crispEdges"
                  aria-hidden="true"
                >
                  <rect x="2" y="6" width="5" height="4" fill="#FDE047" />
                  <rect x="7" y="7" width="2" height="2" fill="#FDE047" />
                  <rect x="2" y="10" width="5" height="1" fill="rgba(15,23,42,0.12)" />
                </svg>
              </div>

              {/* speech bubble (now light, not black) */}
              <div
                className={
                  "pointer-events-none absolute -top-7 left-7 select-none transition " +
                  (kweh ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1")
                }
              >
                <div className="relative rounded-xl bg-white/95 px-2.5 py-1 text-[11px] font-semibold text-slate-900 shadow-sm ring-1 ring-black/5">
                  {kwehText}
                  <span className="absolute -bottom-1 left-3 h-2 w-2 rotate-45 bg-white/95 ring-1 ring-black/5" />
                </div>
              </div>

              {/* particle bursts */}
              {!reducedMotion && (
                <div className="pointer-events-none absolute inset-0">
                  {bursts.map((b) =>
                    b.particles.map((p) => (
                      <span
                        key={p.key}
                        className="choco-particle absolute left-1/2 top-1/2"
                        style={{
                          transform: `translate(${p.x}px, ${p.y}px) scale(${p.s}) rotate(${p.r}deg)`,
                          opacity: p.o,
                          animationDuration: `${0.75 * p.d}s`,
                        }}
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          </button>

          {/* Text */}
          <div className="min-w-0">
            <p className="text-sm font-semibold text-slate-900">Kweh! Nice to meet you.</p>
            <p className="mt-1 text-sm text-slate-600">{message}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-700">
                quick replies
              </span>
              <span className="rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-700">
                open to roles
              </span>
            </div>
          </div>
        </div>

        {/* subtle moving accent line */}
        <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="choco-shine h-full w-1/3 rounded-full bg-slate-900/60" />
        </div>
      </div>

      <style>{`
        @keyframes bob {
          0% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .choco-bob { animation: bob 1.3s ease-in-out infinite; }

        @keyframes flap {
          0% { transform: rotate(8deg); }
          50% { transform: rotate(-18deg); }
          100% { transform: rotate(8deg); }
        }
        .choco-wing { animation: flap 0.55s ease-in-out infinite; }

        .choco-particle {
          width: 6px;
          height: 6px;
          border-radius: 2px;
          background: rgba(251, 191, 36, 0.95);
          box-shadow:
            10px 0 rgba(56, 189, 248, 0.55),
            -10px 0 rgba(244, 114, 182, 0.45);
          animation: pop 0.75s ease-out forwards;
        }

        @keyframes pop {
          0% { transform: translate(0,0) scale(0.6); opacity: 0; }
          15% { opacity: 1; }
          100% { transform: translate(0,0) scale(1); opacity: 0; }
        }

        @keyframes shine {
          0% { transform: translateX(-120%); opacity: 0.55; }
          40% { opacity: 0.9; }
          100% { transform: translateX(420%); opacity: 0.55; }
        }
        .choco-shine { animation: shine 3.6s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .choco-bob, .choco-wing, .choco-shine, .choco-particle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
