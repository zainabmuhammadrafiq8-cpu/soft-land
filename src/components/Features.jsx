import { BiCheck } from "react-icons/bi";
import { features } from "../data/content.js";

export default function Features() {
  return (
    <section id="features" className="section-pad bg-white">
      <div className="container section-title" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">Features</h2>
        <p  className="text-center py-8">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container space-y-12 md:space-y-[110px]">
        {features.map((feature, i) => (
          <div
            key={i}
            className="grid grid-cols-1 items-center gap-10 md:grid-cols-12"
          >
            <div
              className={`md:col-span-5 ${feature.reverse ? "md:order-2" : ""}`}
              data-aos="zoom-out"
            >
              <div className="relative">
                <div className="absolute -inset-4 rounded-[32px] bg-accent-gradient opacity-10 blur-2xl" />
                <div className="relative overflow-hidden rounded-3xl border border-black/5 bg-light-bg p-6 shadow-card">
                  <img src={feature.img} alt="" className="w-full" />
                </div>
              </div>
            </div>

            <div
              className={`md:col-span-7 ${feature.reverse ? "md:order-1" : ""}`}
              data-aos="fade-up"
            >
              <h3 className="text-[22px] font-bold leading-snug text-heading md:text-[28px]">
                {feature.title}
              </h3>
              {feature.italic && (
                <p className="mt-3 italic text-body/70">{feature.italic}</p>
              )}
              {feature.body && (
                <p className="mt-3 text-body/70">{feature.body}</p>
              )}
              {feature.list && (
                <ul className="mt-5 list-none space-y-3 p-0">
                  {feature.list.map((li) => (
                    <li key={li} className="flex items-start gap-3 text-body/80">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-mint/15 text-mint">
                        <BiCheck className="text-base" />
                      </span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
