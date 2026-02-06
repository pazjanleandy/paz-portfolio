import { useMemo, useRef, useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/Sectiontitle";
import { projects } from "../data/projects";
import ProjectFilters from "../components/projects/ProjectFilters";
import ProjectShowcase from "../components/projects/ProjectShowcase";
import ProjectCard from "../components/projects/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const defaultSelected = useMemo(() => {
    return projects.find((p) => p.featured) || projects[0];
  }, []);

  const [selectedTitle, setSelectedTitle] = useState(defaultSelected?.title || "");
  const showcaseRef = useRef(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter(
      (p) => (p.category || "").toLowerCase() === filter.toLowerCase()
    );
  }, [filter]);

  const selected = useMemo(() => {
    const clicked = projects.find((p) => p.title === selectedTitle);

    if (filter !== "All") {
      const inFiltered = filtered.find((p) => p.title === selectedTitle);
      return inFiltered || filtered[0] || clicked || projects[0];
    }

    return clicked || projects[0];
  }, [selectedTitle, filter, filtered]);

  function onSelectProject(title) {
    setSelectedTitle(title);
    requestAnimationFrame(() => {
      showcaseRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <section
      id="projects"
      className="relative isolate border-y border-slate-200/70 py-14 sm:py-16 lg:py-24"
    >
      {/* section background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-indigo-500/10 to-sky-500/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
        <div className="absolute left-1/2 top-[-160px] h-[460px] w-[980px] -translate-x-1/2 rounded-full bg-indigo-300/35 blur-3xl" />
        <div className="absolute right-[-160px] bottom-[-220px] h-[520px] w-[520px] rounded-full bg-sky-300/28 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionTitle
              kicker="Projects"
              title="Selected work"
              subtitle="Click a project card to feature it above."
            />

            <ProjectFilters value={filter} onChange={setFilter} />
          </div>

          <ProjectShowcase project={selected} innerRef={showcaseRef} />

          <div className="mt-8">
            <div
              className={[
                "-mx-4 flex gap-4 overflow-x-auto px-4 pb-2",
                "snap-x snap-mandatory",
                "sm:mx-0 sm:grid sm:gap-6 sm:overflow-visible sm:px-0 sm:snap-none",
                "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              ].join(" ")}
            >
              {filtered.map((p) => (
                <div
                  key={p.title}
                  className="snap-start shrink-0 w-[85%] sm:w-auto"
                >
                  <ProjectCard
                    project={p}
                    selected={p.title === selected?.title}
                    onSelect={onSelectProject}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
