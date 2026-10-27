
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { galleryImages } from "../data/content.js";
import Lightbox from "./Lightbox.jsx";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="gallery" className="section-pad overflow-hidden bg-white py-16">
      <div className="container mx-auto px-4 section-title mb-10" data-aos="fade-up">
        <h2 className="text-center text-3xl font-bold text-gray-900">Gallery</h2>
        <p className="text-center py-2 text-gray-600 text-sm sm:text-base">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="w-full px-4 sm:px-6" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          className="gallery-swiper mx-auto max-w-[1400px] pb-12"
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={15}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 15, centeredSlides: true },
            640: { slidesPerView: 2, spaceBetween: 20, centeredSlides: true },
            768: { slidesPerView: 3, spaceBetween: 20, centeredSlides: true },
            992: { slidesPerView: 4, spaceBetween: 25, centeredSlides: true },
            1200: { slidesPerView: 5, spaceBetween: 30, centeredSlides: true },
          }}
        >
          {galleryImages.map((img, i) => (
            <SwiperSlide key={img.src} className="!h-auto">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                className="group block w-full cursor-pointer overflow-hidden rounded-2xl shadow-md transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 md:h-80"
                  loading="lazy"
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Lightbox
        images={galleryImages}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}