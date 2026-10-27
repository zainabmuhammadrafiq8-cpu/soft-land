import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { BiSolidStar, BiSolidQuoteAltLeft } from "react-icons/bi";
import { testimonials } from "../data/content.js";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-light-bg">
      <div className="container section-title" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">Testimonials</h2>
        <p  className="text-center py-4">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="soft-pagination"
          modules={[Autoplay, Pagination]}
          loop
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 24 },
            1200: { slidesPerView: 3, spaceBetween: 24 },
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name} className="!h-auto pb-2 pt-2">
              <div className="group h-full rounded-2xl border border-black/5 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/10">
                <BiSolidQuoteAltLeft className="text-3xl text-accent/30" />
                <p className="mt-3 text-[15px] italic leading-7 text-body/80">
                  {t.text}
                </p>
                <div className="mt-5 flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <BiSolidStar key={i} />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-4 border-t border-black/5 pt-5">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-accent/20"
                  />
                  <div>
                    <h3 className="font-heading text-base font-bold text-heading">
                      {t.name}
                    </h3>
                    <h4 className="text-sm text-body/50">{t.role}</h4>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
