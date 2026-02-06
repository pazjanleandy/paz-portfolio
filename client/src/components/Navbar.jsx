import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container className="flex items-center justify-between py-3">
        <a href="#home" className="font-semibold tracking-tight text-slate-900">
          Jan<span className="text-slate-400">.dev</span>
        </a>

        <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
          <a
            className="hover:text-slate-900 hover:underline hover:decoration-slate-300 underline-offset-4"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-slate-900 hover:underline hover:decoration-slate-300 underline-offset-4"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="hover:text-slate-900 hover:underline hover:decoration-slate-300 underline-offset-4"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-slate-200"
        >
          Hire me
        </a>
      </Container>
    </header>
  );
}
