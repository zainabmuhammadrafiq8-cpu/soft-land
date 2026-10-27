

import { BiLogoPlayStore, BiLogoApple } from "react-icons/bi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88vh] w-full items-center overflow-hidden bg-dark-gradient pt-[130px] pb-[70px]"
    >
      <div className="absolute inset-0 z-[2] bg-grid-pattern bg-[length:22px_22px] opacity-60" />
      <div className="absolute inset-x-0 top-0 z-[2] h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="pointer-events-none absolute -left-24 top-10 z-[2] h-72 w-72 animate-float rounded-full bg-accent/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 z-[2] h-80 w-80 animate-float-slow rounded-full bg-mint/20 blur-3xl" />

      <div className="container relative z-[3]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          
          {/* Centered & Responsive Images Section */}
          <div
            className="relative order-last flex items-center justify-center min-h-[420px] sm:min-h-[480px] lg:order-none lg:col-span-4 lg:col-start-9 lg:min-h-[600px] lg:block"
            data-aos="zoom-out"
          >
            <div className="relative w-[230px] sm:w-[260px] lg:w-full h-full">
              <img
                src="/assets/img/phone_1.png"
                alt="Phone 1"
                className="absolute left-0 top-0 w-[190px] sm:w-[220px] lg:left-0 lg:w-[250px] animate-float rounded-[30px] shadow-phone"
              />
              <img
                src="/assets/img/phone_2.png"
                alt="Phone 2"
                className="absolute left-[40px] top-[45px] sm:left-[50px] sm:top-[55px] w-[190px] sm:w-[220px] lg:left-[100px] lg:mt-[70px] lg:w-[250px] animate-float-slow rounded-[30px] shadow-phone"
              />
            </div>
          </div>

          {/* Text Content Section */}
          <div
            className="flex flex-col justify-center text-center lg:col-span-8 lg:row-start-1 lg:text-left"
            data-aos="fade-up"
          >
            <span className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur lg:mx-0">
              <span className="h-2 w-2 animate-pulse-soft rounded-full bg-accent-light" />
              New release available
            </span>
            <h2 className="m-0 text-[28px] font-bold leading-9 text-white md:text-[48px] md:leading-[56px]">
              Promote Your App with{" "}
              <span className="bg-gradient-to-r from-accent-light to-mint bg-clip-text text-transparent">
                SoftLand
              </span>
            </h2>
            <p className="mt-[5px] mb-[10px] text-lg font-normal text-white/70 md:text-xl">
              We are a team of talented designers making modern web experiences.
            </p>
            <div className="mt-4 flex justify-center gap-5 lg:justify-start">
              <a
                href="#"
                className="flex items-center rounded-lg border border-white/15 bg-white/10 px-5 py-[8px] font-heading text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-accent-gradient md:px-[30px] md:pb-[10px] md:text-[15px]"
              >
                <BiLogoPlayStore className="mr-2 text-base" />
                Google Play
              </a>
              <a
                href="#"
                className="flex items-center rounded-lg border border-white/15 bg-white/10 px-5 py-[8px] font-heading text-sm font-medium text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-accent-gradient md:px-[30px] md:pb-[10px] md:text-[15px]"
              > 
                <BiLogoApple className="mr-2 text-base" />
                App Store
              </a>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 lg:justify-start">
              {[
                { value: "50K+", label: "Downloads" },
                { value: "4.9", label: "Avg. Rating" },
                { value: "120+", label: "Countries" },
              ].map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="font-heading text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-white/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
