import Container from "../components/Container";

export default function Hero() {
  return (
    <section id="home" className="border-b border-slate-200/70">
      <Container className="py-14 sm:py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-3 py-1 text-xs text-slate-700 shadow-sm ring-1 ring-black/5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Open to internships / junior roles
            </p>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl 2xl:text-7xl">
              Hi, I'm{" "}
              <span className="relative underline decoration-slate-300 underline-offset-4">
                <span className="absolute -inset-x-1 -inset-y-0.5 -z-10 rounded-lg bg-slate-900/5" />
                Jan
              </span>
              .
              <br />
              I build reliable software and practical AI systems.
            </h1>

            <p className="mt-6 max-w-2xl text-slate-600 sm:text-lg 2xl:text-xl">
              I'm a Computer Science student focused on Software Engineering, with hands-on experience
              in Python, CNN-based image classification, and QA testing. I like building systems that are
              measurable, testable, and actually usable—then improving them through iteration.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                View projects
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white hover:border-slate-300 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                Contact
              </a>

              <a
                href="/Paz_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-300/80 bg-white/70 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-white hover:border-slate-300 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-slate-200"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="group rounded-2xl border border-slate-200/70 bg-white/60 p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md lg:p-8">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.png"
                  alt="Jan Leandy Paz"
                  className="h-20 w-20 rounded-2xl object-cover ring-1 ring-black/10 shadow-sm"
                />

                <div>
                  <p className="font-semibold text-slate-900">Jan Leandy Paz</p>
                  <p className="text-sm text-slate-600">SE • Python • AI • QA</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-sm font-medium text-slate-900">Strengths</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Python-first problem solving, clear documentation, and QA mindset—turning requirements
                    into testable features.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm ring-1 ring-black/5">
                  <p className="text-sm font-medium text-slate-900">Currently learning</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Model evaluation (metrics + dataset quality), CI-friendly testing, and shipping small,
                    reliable releases.
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-3xl bg-slate-900/5 md:block" />
            <div className="pointer-events-none absolute -top-6 -right-6 hidden h-24 w-24 rounded-3xl bg-slate-900/5 md:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
