import { steps } from "../data/content.js";

export default function Steps() {
  return (
    <section id="cards" className="section-pad relative overflow-hidden bg-light-bg">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-mint/10 blur-3xl" />

      <div className="container section-title relative" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">How it works</h2>
        <p  className="text-center py-8">Get up and running in three simple steps — no setup headaches.</p>
      </div>

      <div className="container relative">
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-[repeating-linear-gradient(90deg,#6d5ef2_0_8px,transparent_8px_16px)] opacity-30 md:block" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="group relative text-center"
              data-aos="fade-up"
              data-aos-delay={100 + i * 100}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-gradient font-heading text-xl font-bold text-white shadow-lg shadow-accent/30 transition duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                {step.num}
              </div>
              <h4 className="my-5 font-heading text-xl font-semibold text-heading">
                {step.title}
              </h4>
              <p className="mx-auto mb-0 max-w-xs text-[15px] leading-6 text-body/60">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
