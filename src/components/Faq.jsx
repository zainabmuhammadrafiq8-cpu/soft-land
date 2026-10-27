import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { faqs } from "../data/content.js";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-light-bg">
      <div className="container section-title" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">Frequently Asked Questions</h2>
        <p  className="text-center py-8">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className={`cursor-pointer overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-accent/30 shadow-lg shadow-accent/10"
                    : "border-black/5 hover:border-accent/20"
                }`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <div className="flex items-center gap-4 p-5">
                  <span
                    className={`font-heading text-sm font-bold ${
                      isOpen ? "text-accent" : "text-body/30"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`flex-1 text-base font-semibold transition ${
                      isOpen ? "text-accent" : "text-heading"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <span
                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-lg transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-accent-gradient text-white"
                        : "bg-light-bg text-accent"
                    }`}
                  >
                    <BiPlus />
                  </span>
                </div>
                <div
                  className={`grid px-5 transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="mb-0 overflow-hidden pl-9 text-body/70">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
