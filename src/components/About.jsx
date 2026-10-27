// import { BiRightArrowAlt } from "react-icons/bi";
// import { aboutBoxes } from "../data/content.js";

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="section-pad relative overflow-hidden bg-light-bg"
//       data-aos="fade-up"
//     >
//       <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

//       <div className="container relative" >
//         <div className="grid grid-cols-1 items-center gap-10 xl:grid-cols-12  ">
//           <div className="xl:col-span-5">
//             <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-2 text-sm font-semibold text-accent shadow-sm">
//               <span className="h-2 w-2 rounded-full bg-mint-gradient" />
//               About Us
//             </span>
//             <h2 className="mt-5 font-heading text-[28px] font-bold leading-snug text-heading md:text-[38px]">
//               Ducimus rerum libero reprehenderit cumque
//             </h2>
//             <p className="mt-5 text-body/70">
//               Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque
//               alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum
//               quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
//               tempora deleniti soluta.
//             </p>
//             <a href="#" className="btn-accent mt-7 gap-1">
//               Read More
//               <BiRightArrowAlt className="text-lg" />
//             </a>
//           </div>

//           <div className="xl:col-span-7">
//             <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
//               {aboutBoxes.map((box, i) => {
//                 const Icon = box.icon;
//                 return (
//                   <div
//                     key={box.title}
//                     data-aos="fade-up"
//                     data-aos-delay={200 + i * 100}
//                   >
//                     <div className="group h-full rounded-2xl border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
//                       <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-[26px] text-accent transition-all duration-300 group-hover:bg-accent-gradient group-hover:text-white">
//                         <Icon />
//                       </div>
//                       <h3 className="mb-2 font-heading text-lg font-bold text-heading">
//                         {box.title}
//                       </h3>
//                       <p className="mb-0 text-sm leading-6 text-body/70">
//                         {box.text}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }










import { BiRightArrowAlt } from "react-icons/bi";
import { aboutBoxes } from "../data/content.js";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad relative overflow-hidden bg-light-bg py-16"
      data-aos="fade-up"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* lg:grid-cols-12 use kiya hai taake laptop screen par bhi side-by-side aaye */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          
          {/* Left Side: Content (5 columns) */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white px-4 py-2 text-sm font-semibold text-accent shadow-sm">
              <span className="h-2 w-2 rounded-full bg-mint-gradient" />
              About Us
            </span>
            <h2 className="mt-5 font-heading text-[28px] font-bold leading-snug text-heading md:text-[38px]">
              Ducimus rerum libero reprehenderit cumque
            </h2>
            <p className="mt-5 text-body/70">
              Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque
              alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum
              quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem
              tempora deleniti soluta.
            </p>
            <a href="#" className="btn-accent mt-7 inline-flex items-center gap-1">
              Read More
              <BiRightArrowAlt className="text-lg" />
            </a>
          </div>

          {/* Right Side: Cards (7 columns) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {aboutBoxes.map((box, i) => {
                const Icon = box.icon;
                return (
                  <div
                    key={box.title}
                    data-aos="fade-up"
                    data-aos-delay={200 + i * 100}
                  >
                    <div className="group h-full rounded-2xl border border-black/5 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10">
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-[26px] text-accent transition-all duration-300 group-hover:bg-accent-gradient group-hover:text-white">
                        <Icon />
                      </div>
                      <h3 className="mb-2 font-heading text-lg font-bold text-heading">
                        {box.title}
                      </h3>
                      <p className="mb-0 text-sm leading-6 text-body/70">
                        {box.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}










