import { useMemo, useState } from "react";
import Modal from "./Modal";
import { Play } from "phosphor-react";

function getYouTubeId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    const v = u.searchParams.get("v");
    if (v) return v;
    const parts = u.pathname.split("/").filter(Boolean);
    const i = parts.indexOf("embed");
    if (i !== -1 && parts[i + 1]) return parts[i + 1];
  } catch {
    return null;
  }
  return null;
}

export default function ProjectVideo({ youtubeUrl, title = "Project demo", thumbnail }) {
  const [open, setOpen] = useState(false);
  const videoId = useMemo(() => getYouTubeId(youtubeUrl), [youtubeUrl]);

  if (!thumbnail) {
    // fallback if someone forgets thumbnail
    return <div className="aspect-video w-full bg-slate-200" />;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full"
        aria-label={`Play video: ${title}`}
      >
        <div className="relative aspect-video w-full">
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />

          <div className="absolute inset-0 grid place-items-center">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow-sm ring-1 ring-black/10 transition group-hover:scale-[1.03]">
              <Play size={20} weight="fill" className="text-slate-900" />
            </span>
          </div>
        </div>
      </button>

      <Modal open={open} title={title} onClose={() => setOpen(false)}>
        <div className="aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            className="h-full w-full"
            src={
              videoId
                ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
                : youtubeUrl
            }
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
}
