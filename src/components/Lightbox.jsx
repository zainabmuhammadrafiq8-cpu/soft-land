import { useEffect } from "react";
import { BiX, BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft")
        onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, images.length, onClose, onNavigate]);

  if (index === null) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 text-4xl text-white/80 transition hover:text-white"
        aria-label="Close"
      >
        <BiX />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute left-4 text-5xl text-white/70 transition hover:text-white"
        aria-label="Previous"
      >
        <BiChevronLeft />
      </button>
      <img
        src={images[index].src}
        alt={images[index].alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
      />
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute right-4 text-5xl text-white/70 transition hover:text-white"
        aria-label="Next"
      >
        <BiChevronRight />
      </button>
    </div>
  );
}
