import { useState } from "react";
import Container from "../components/Container";
import SectionTitle from "../components/Sectiontitle";
import AsciiTerminal from "../components/AsciiTerminal";
import {
  Cpu,
  Coffee,
  Brain,
  FileHtml,
  FileCss,
  FileJs,
  Atom,
  Wind,
  GitBranch,
  TestTube,
  GraduationCap,
} from "phosphor-react";

function ProviderBadge({ type }) {
  if (type === "ace") {
    return (
      <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/70 bg-white/70 shadow-sm ring-1 ring-black/5">
       <img src="/logos/ace.jpg" alt="ACE" />
      </div>
    );
  }

  // cisco networking academy
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200/70 bg-white/70 shadow-sm ring-1 ring-black/5">
      <img src="/logos/cisco.jpg" alt="Cisco" />
    </div>
  );
}

function CertItem({ title, org, year, providerType }) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-slate-200/70 bg-white/60 p-4 shadow-sm ring-1 ring-black/5">
      <ProviderBadge type={providerType} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs text-slate-600">
          {org} • {year}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const [activeSkill, setActiveSkill] = useState("Python");

  const skills = [
    { key: "Python", icon: <Cpu size={14} /> },
    { key: "Java", icon: <Coffee size={14} /> },
    { key: "CNNs", icon: <Brain size={14} /> },
    { key: "HTML", icon: <FileHtml size={14} /> },
    { key: "CSS", icon: <FileCss size={14} /> },
    { key: "JavaScript", icon: <FileJs size={14} /> },
    { key: "React", icon: <Atom size={14} /> },
    { key: "Tailwind", icon: <Wind size={14} /> },
    { key: "Git/GitHub", icon: <GitBranch size={14} /> },
    { key: "Basic QA", icon: <TestTube size={14} /> },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
      <Container>
        <SectionTitle kicker="About" title="A bit about me" />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* LEFT COLUMN */}
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="max-w-2xl text-slate-600">
              I am a Computer Science student specializing in Software Engineering with hands-on
              experience in AI-driven systems, front-end development, and embedded hardware
              prototyping. I am passionate about building intelligent user-focused applications and
              continuously improving my technical skill set.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-medium text-slate-900">What I do</p>
                <p className="mt-1 text-sm text-slate-600">
                  Software engineering foundations, Python development, and practical UI work with
                  React when needed.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200/70 bg-white/70 p-4 shadow-sm ring-1 ring-black/5">
                <p className="text-sm font-medium text-slate-900">What I value</p>
                <p className="mt-1 text-sm text-slate-600">
                  Measurable results, clean code, and a QA mindset—shipping features that are
                  testable and reliable.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-slate-900" />
                <p className="text-sm font-semibold text-slate-900">Certifications</p>
              </div>

              <div className="mt-3 grid gap-3">
                <CertItem
                  title="IT Specialist – Python"
                  org="American Council on Education"
                  year="2024"
                  providerType="ace"
                />
                <CertItem
                  title="NDG Linux Essentials"
                  org="Cisco Networking Academy"
                  year="2024"
                  providerType="cisco"
                />
                <CertItem
                  title="IT Specialist – Java"
                  org="American Council on Education"
                  year="2023"
                  providerType="ace"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-semibold text-slate-900">Skills</p>

            {/* clickable chips */}
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((s) => {
                const active = s.key === activeSkill;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActiveSkill(s.key)}
                    className={[
                      "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm ring-1 transition",
                      active
                        ? "border-slate-300 bg-white text-slate-900 ring-black/10"
                        : "border-slate-200/70 bg-white/55 text-slate-700 ring-black/5 hover:bg-white",
                    ].join(" ")}
                  >
                    <span className={active ? "text-slate-900" : "text-slate-600"}>
                      {s.icon}
                    </span>
                    {s.key}
                  </button>
                );
              })}
            </div>

            {/* your terminal stays here */}
            <div className="mt-4">
              <AsciiTerminal title="Skills Snapshot" activeKey={activeSkill} />
            </div>

            <p className="mt-6 text-sm font-semibold text-slate-900">Interests</p>
            <p className="mt-2 text-sm text-slate-600">
              Building practical tools, testing flows, model evaluation, and clean UI systems that
              feel good to use.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
