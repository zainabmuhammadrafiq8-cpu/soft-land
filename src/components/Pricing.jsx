import { BiCheck, BiX } from "react-icons/bi";
import { pricing } from "../data/content.js";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white pt-[60px] pb-[120px]">
      <div className="container section-title" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">Pricing</h2>
        <p  className="text-center py-14">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
          {pricing.map((plan) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-9 transition-all duration-300 ${
                  plan.featured
                    ? "bg-dark-gradient text-white shadow-2xl shadow-accent/25 lg:-translate-y-4 lg:scale-[1.04]"
                    : "border border-black/5 bg-white shadow-card hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent-gradient px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${
                      plan.featured
                        ? "bg-white/10 text-accent-light"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon />
                  </span>
                  <h3
                    className={`font-heading text-lg font-semibold ${
                      plan.featured ? "text-white" : "text-heading"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mt-6 mb-6">
                  <span
                    className={`font-heading text-[52px] font-bold leading-none ${
                      plan.featured ? "text-white" : "text-heading"
                    }`}
                  >
                    <sup className="text-2xl">$</sup>
                    {plan.price}
                  </span>
                  <span
                    className={`text-lg ${
                      plan.featured ? "text-white/60" : "text-body/50"
                    }`}
                  >
                    {" "}
                    / month
                  </span>
                </div>

                <ul className="mb-8 list-none space-y-3 p-0 text-left">
                  {plan.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-center gap-3 text-[15px] ${
                        f.included
                          ? plan.featured
                            ? "text-white/85"
                            : "text-body/80"
                          : plan.featured
                          ? "text-white/30"
                          : "text-body/30"
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                          f.included
                            ? "bg-mint/20 text-mint"
                            : plan.featured
                            ? "bg-white/10 text-white/40"
                            : "bg-black/5 text-body/40"
                        }`}
                      >
                        {f.included ? (
                          <BiCheck className="text-sm" />
                        ) : (
                          <BiX className="text-sm" />
                        )}
                      </span>
                      <span className={f.included ? "" : "line-through"}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#"
                    className={`block rounded-full py-3 text-center font-heading font-semibold transition duration-300 ${
                      plan.featured
                        ? "bg-white text-heading hover:bg-accent-light hover:text-white"
                        : "bg-accent-gradient text-white shadow-lg shadow-accent/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35"
                    }`}
                  >
                    Buy Now
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
