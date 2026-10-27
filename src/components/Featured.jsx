import { BiRightArrowAlt } from "react-icons/bi";
import { featuredCards } from "../data/content.js";

export default function Featured() {
  return (
    <section id="featured" className="section-pad bg-white">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="text-center text-2xl font-bold">Save your time to using SoftLand</h2>
        <p className="text-center py-8 ">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {featuredCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="group relative h-full overflow-hidden rounded-2xl border border-black/5 bg-white p-4 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/10"
                data-aos="fade-up"
                data-aos-delay={100 + i * 100}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-accent-gradient opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-xl bg-light-bg p-3">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full rounded-lg transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-3 pb-2 pt-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-[24px] text-accent transition-all duration-300 group-hover:bg-accent-gradient group-hover:text-white">
                    <Icon />
                  </div>
                  <h2 className="mb-2 font-heading text-xl font-bold text-heading">
                    {card.title}
                  </h2>
                  <p className="mb-4 text-sm leading-6 text-body/70">
                    {card.text}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition group-hover:gap-2"
                  >
                    Learn more
                    <BiRightArrowAlt className="text-lg" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
