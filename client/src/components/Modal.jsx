import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, title, children, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);

    // lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999]">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Centered dialog */}
      <div className="relative flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="text-sm font-medium text-white/90">{title}</p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/90 hover:bg-white/15"
            >
              Close
            </button>
          </div>

          {/* Content */}
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
