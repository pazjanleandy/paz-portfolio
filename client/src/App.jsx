import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-slate-900">
      {/* Dynamic background */}
      <div className="fixed inset-0 -z-10">
        <div className="bg-mesh">
          <div className="orb a" />
          <div className="orb b" />
          <div className="orb c" />
          <div className="bg-grid" />
          <div className="noise absolute inset-0 opacity-[0.05]" />
        </div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
