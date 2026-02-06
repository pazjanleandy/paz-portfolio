import Container from "../components/container";
import SectionTitle from "../components/sectiontitle";
import ChocoboBuddy from "../components/ChocoboBuddy";
import {
  EnvelopeSimple,
  PhoneCall,
  MapPin,
  Clock,
  GithubLogo,
  LinkedinLogo,
  DownloadSimple,
  FileText,
} from "phosphor-react";

const inputClass =
  "rounded-lg border border-slate-300/80 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none " +
  "placeholder:text-slate-400 transition " +
  "focus:border-slate-400 focus:ring-4 focus:ring-slate-200/60";

export default function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-16 lg:py-24">
      <Container>
        <SectionTitle
          kicker="Contact"
          title="Let's talk"
          subtitle="I'm open to internships and junior roles (Software Engineering / QA). Feel free to reach out."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-black/5">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Direct
                </p>
                <div className="mt-4 space-y-4 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <EnvelopeSimple size={18} className="mt-0.5 text-slate-500" />
                    <div>
                      <p className="text-slate-900 font-medium">Email</p>
                      <a
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                        href="mailto:pazjanleandy@gmail.com?subject=Portfolio%20Inquiry"
                      >
                        pazjanleandy@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <PhoneCall size={18} className="mt-0.5 text-slate-500" />
                    <div>
                      <p className="text-slate-900 font-medium">Contact number</p>
                      <a
                        className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-900"
                        href="tel:09674294351"
                      >
                        09674294351
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="mt-0.5 text-slate-500" />
                    <div>
                      <p className="text-slate-900 font-medium">Location</p>
                      <p>Las Pinas, Philippines</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={18} className="mt-0.5 text-slate-500" />
                    <div>
                      <p className="text-slate-900 font-medium">Availability</p>
                      <p>8:00 am to 8:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Links
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                    href="https://github.com/pazjanleandy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GithubLogo size={16} />
                    GitHub
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                    href="https://www.linkedin.com/in/jan-leandy-paz-7851b339b/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedinLogo size={16} />
                    LinkedIn
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                    href="/Paz_Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FileText size={16} />
                    View resume
                  </a>

                  <a
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-50"
                    href="/Paz_Resume.pdf"
                    download
                  >
                    <DownloadSimple size={16} />
                    Download resume
                  </a>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Tip: You can also message me using the form on the right.
              </p>
            </div>

            <div className="mt-6">
              <ChocoboBuddy />
            </div>
          </div>

          <form
            className="self-start rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm ring-1 ring-black/5"
            action="https://formspree.io/f/xkovwodb"
            method="POST"
          >
            <p className="text-sm font-semibold text-slate-900">Send a message</p>

            <div className="mt-4 grid gap-4">
              <label className="grid gap-2 text-sm">
                <span className="text-slate-700">Name</span>
                <input
                  name="name"
                  className={inputClass}
                  placeholder="Your name"
                  autoComplete="name"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-slate-700">Email</span>
                <input
                  name="email"
                  type="email"
                  className={inputClass}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label className="grid gap-2 text-sm">
                <span className="text-slate-700">Message</span>
                <textarea
                  name="message"
                  rows="4"
                  className={inputClass}
                  placeholder="Write a short message..."
                  required
                />
              </label>

              <input type="hidden" name="_subject" value="Portfolio Inquiry" />

              <input
                type="text"
                name="_gotcha"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <button
                className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 hover:shadow-md active:scale-[0.99] focus:outline-none focus:ring-4 focus:ring-slate-200"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
