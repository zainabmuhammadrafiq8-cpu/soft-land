import { useEffect, useState } from "react";
import { BiUpArrowAlt } from "react-icons/bi";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className={`fixed bottom-[15px] right-[15px] z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-accent-gradient text-2xl text-white shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-0.5 ${
        visible ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <BiUpArrowAlt />
    </button>
  );
}
