// import { useEffect, useState } from "react";
// import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
// import { navLinks } from "../data/content.js";

// const sectionIds = ["hero", "about", "features", "pricing", "contact"];

// function DesktopDropdown({ item, active }) {
//   return (
//     <li className="group relative">
//       <a
//         href={item.href}
//         className={`flex items-center gap-1 px-[15px] py-[18px] font-nav text-base transition last:pr-0 ${
//           active ? "text-white" : "text-white/50 group-hover:text-white"
//         }`}
//       >
//         {item.label}
//         <BiChevronDown className="text-xs transition group-hover:rotate-180" />
//       </a>
//       <ul className="invisible absolute left-[14px] top-[130%] z-50 min-w-[200px] rounded bg-white py-[10px] opacity-0 shadow-soft transition-all duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100">
//         {item.children.map((child) =>
//           child.children ? (
//             <li key={child.label} className="group/nested relative">
//               <a
//                 href={child.href}
//                 className="flex items-center justify-between px-5 py-[10px] text-[15px] text-body hover:text-accent"
//               >
//                 {child.label}
//                 <BiChevronDown className="-rotate-90 text-xs" />
//               </a>
//               <ul className="invisible absolute left-[-90%] top-0 z-50 min-w-[200px] rounded bg-white py-[10px] opacity-0 shadow-soft transition-all duration-300 group-hover/nested:visible group-hover/nested:left-[-100%] group-hover/nested:opacity-100">
//                 {child.children.map((deep) => (
//                   <li key={deep.label}>
//                     <a
//                       href={deep.href}
//                       className="block px-5 py-[10px] text-[15px] text-body hover:text-accent"
//                     >
//                       {deep.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ) : (
//             <li key={child.label}>
//               <a
//                 href={child.href}
//                 className="block px-5 py-[10px] text-[15px] text-body hover:text-accent"
//               >
//                 {child.label}
//               </a>
//             </li>
//           )
//         )}
//       </ul>
//     </li>
//   );
// }

// function MobileNav({ item, close }) {
//   const [open, setOpen] = useState(false);
//   const [deepOpen, setDeepOpen] = useState(false);

//   if (!item.children) {
//     return (
//       <li>
//         <a
//           href={item.href}
//           onClick={close}
//           className="flex items-center px-5 py-[10px] font-nav text-[17px] font-medium text-body transition hover:text-accent"
//         >
//           {item.label}
//         </a>
//       </li>
//     );
//   }

//   return (
//     <li>
//       <button
//         type="button"
//         onClick={() => setOpen((v) => !v)}
//         className={`flex w-full items-center justify-between px-5 py-[10px] font-nav text-[17px] font-medium transition hover:text-accent ${
//           open ? "text-accent" : "text-body"
//         }`}
//       >
//         {item.label}
//         <BiChevronDown
//           className={`text-xs transition ${open ? "rotate-180" : ""}`}
//         />
//       </button>
//       {open && (
//         <ul className="mx-5 my-[10px] rounded border border-black/10 py-[10px]">
//           {item.children.map((child) =>
//             child.children ? (
//               <li key={child.label}>
//                 <button
//                   type="button"
//                   onClick={() => setDeepOpen((v) => !v)}
//                   className="flex w-full items-center justify-between px-5 py-2 text-[15px] font-medium text-body transition hover:text-accent"
//                 >
//                   {child.label}
//                   <BiChevronDown
//                     className={`text-xs transition ${
//                       deepOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//                 {deepOpen && (
//                   <ul className="mx-5 my-1 rounded bg-black/5 py-1">
//                     {child.children.map((deep) => (
//                       <li key={deep.label}>
//                         <a
//                           href={deep.href}
//                           onClick={close}
//                           className="block px-5 py-2 text-[15px] text-body transition hover:text-accent"
//                         >
//                           {deep.label}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ) : (
//               <li key={child.label}>
//                 <a
//                   href={child.href}
//                   onClick={close}
//                   className="block px-5 py-2 text-[15px] text-body transition hover:text-accent"
//                 >
//                   {child.label}
//                 </a>
//               </li>
//             )
//           )}
//         </ul>
//       )}
//     </li>
//   );
// }

// export default function Header() {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [active, setActive] = useState("hero");

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 50);
//       let current = "hero";
//       for (const id of sectionIds) {
//         const el = document.getElementById(id);
//         if (el && el.offsetTop <= window.scrollY + 120) current = id;
//       }
//       setActive(current);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   return (
//     <header
//       id="header"
//       className={`fixed inset-x-0 top-0 z-[997] py-[15px] transition-all duration-500 ${
//         scrolled
//           ? "bg-dark-bg/85 shadow-[0_10px_30px_-10px_rgba(20,46,108,0.6)] backdrop-blur-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="container flex items-center justify-between">
//         <a href="#hero" className="group flex items-center gap-2">
//           <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient text-lg font-bold text-white shadow-md shadow-accent/30">
//             S
//           </span>
//           <h1 className="m-0 font-heading text-[26px] font-bold text-white">
//             Soft<span className="text-accent-light">Land</span>
//           </h1>
//         </a>

//         <nav className="hidden xl:block">
//           <ul className="flex items-center">
//             {navLinks.map((item) =>
//               item.children ? (
//                 <DesktopDropdown
//                   key={item.label}
//                   item={item}
//                   active={active === item.href.slice(1)}
//                 />
//               ) : (
//                 <li key={item.label} className="relative">
//                   <a
//                     href={item.href}
//                     className={`flex items-center px-[15px] py-[18px] font-nav text-base transition last:pr-0 ${
//                       active === item.href.slice(1)
//                         ? "text-white"
//                         : "text-white/50 hover:text-white"
//                     }`}
//                   >
//                     {item.label}
//                   </a>
//                 </li>
//               )
//             )}
//           </ul>
//         </nav>

//         <button
//           type="button"
//           onClick={() => setMobileOpen((v) => !v)}
//           className="text-[28px] leading-none text-white/70 transition hover:text-white xl:hidden"
//           aria-label="Toggle navigation"
//         >
//           {mobileOpen ? <BiX /> : <BiMenu />}
//         </button>
//       </div>

//       {mobileOpen && (
//         <div className="fixed inset-0 z-[9997] overflow-y-auto bg-black/80 xl:hidden">
//           <div className="absolute inset-x-5 top-[60px] z-[9998] rounded-md bg-white py-[10px] shadow-soft">
//             <ul>
//               {navLinks.map((item) => (
//                 <MobileNav
//                   key={item.label}
//                   item={item}
//                   close={() => setMobileOpen(false)}
//                 />
//               ))}
//             </ul>
//           </div>
//           <button
//             type="button"
//             onClick={() => setMobileOpen(false)}
//             className="absolute right-[15px] top-[15px] z-[9999] text-[32px] leading-none text-white"
//             aria-label="Close navigation"
//           >
//             <BiX />
//           </button>
//         </div>
//       )}
//     </header>
//   );
// }






import { useEffect, useState } from "react";
import { BiChevronDown, BiMenu, BiX } from "react-icons/bi";
import { navLinks } from "../data/content.js";

const sectionIds = ["hero", "about", "features", "pricing", "contact"];

function DesktopDropdown({ item, active }) {
  return (
    <li className="group relative">
      <a
        href={item.href}
        className={`flex items-center gap-1 px-[15px] py-[18px] font-nav text-base transition last:pr-0 ${
          active ? "text-white" : "text-white/50 group-hover:text-white"
        }`}
      >
        {item.label}
        <BiChevronDown className="text-xs transition group-hover:rotate-180" />
      </a>
      <ul className="invisible absolute left-[14px] top-[130%] z-50 min-w-[200px] rounded bg-white py-[10px] opacity-0 shadow-soft transition-all duration-300 group-hover:visible group-hover:top-full group-hover:opacity-100">
        {item.children.map((child) =>
          child.children ? (
            <li key={child.label} className="group/nested relative">
              <a
                href={child.href}
                className="flex items-center justify-between px-5 py-[10px] text-[15px] text-body hover:text-accent"
              >
                {child.label}
                <BiChevronDown className="-rotate-90 text-xs" />
              </a>
              <ul className="invisible absolute left-[-90%] top-0 z-50 min-w-[200px] rounded bg-white py-[10px] opacity-0 shadow-soft transition-all duration-300 group-hover/nested:visible group-hover/nested:left-[-100%] group-hover/nested:opacity-100">
                {child.children.map((deep) => (
                  <li key={deep.label}>
                    <a
                      href={deep.href}
                      className="block px-5 py-[10px] text-[15px] text-body hover:text-accent"
                    >
                      {deep.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={child.label}>
              <a
                href={child.href}
                className="block px-5 py-[10px] text-[15px] text-body hover:text-accent"
              >
                {child.label}
              </a>
            </li>
          )
        )}
      </ul>
    </li>
  );
}

function MobileNav({ item, close }) {
  const [open, setOpen] = useState(false);
  const [deepOpen, setDeepOpen] = useState(false);

  if (!item.children) {
    return (
      <li>
        <a
          href={item.href}
          onClick={close}
          className="flex items-center px-5 py-[10px] font-nav text-[17px] font-medium text-body transition hover:text-accent"
        >
          {item.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between px-5 py-[10px] font-nav text-[17px] font-medium transition hover:text-accent ${
          open ? "text-accent" : "text-body"
        }`}
      >
        {item.label}
        <BiChevronDown
          className={`text-xs transition ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="mx-5 my-[10px] rounded border border-black/10 py-[10px]">
          {item.children.map((child) =>
            child.children ? (
              <li key={child.label}>
                <button
                  type="button"
                  onClick={() => setDeepOpen((v) => !v)}
                  className="flex w-full items-center justify-between px-5 py-2 text-[15px] font-medium text-body transition hover:text-accent"
                >
                  {child.label}
                  <BiChevronDown
                    className={`text-xs transition ${
                      deepOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {deepOpen && (
                  <ul className="mx-5 my-1 rounded bg-black/5 py-1">
                    {child.children.map((deep) => (
                      <li key={deep.label}>
                        <a
                          href={deep.href}
                          onClick={close}
                          className="block px-5 py-2 text-[15px] text-body transition hover:text-accent"
                        >
                          {deep.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={child.label}>
                <a
                  href={child.href}
                  onClick={close}
                  className="block px-5 py-2 text-[15px] text-body transition hover:text-accent"
                >
                  {child.label}
                </a>
              </li>
            )
          )}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = "hero";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      id="header"
      className={`fixed inset-x-0 top-0 z-[997] py-[15px] transition-all duration-500 ${
        scrolled
          ? "bg-dark-bg/85 shadow-[0_10px_30px_-10px_rgba(20,46,108,0.6)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="group flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-gradient text-lg font-bold text-white shadow-md shadow-accent/30">
            S
          </span>
          <h1 className="m-0 font-heading text-[26px] font-bold text-white">
            Soft<span className="text-accent-light">Land</span>
          </h1>
        </a>

        {/* Desktop Navigation (Visible on lg/1024px and above) */}
        <nav className="hidden lg:block">
          <ul className="flex items-center">
            {navLinks.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  active={active === item.href.slice(1)}
                />
              ) : (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    className={`flex items-center px-[15px] py-[18px] font-nav text-base transition last:pr-0 ${
                      active === item.href.slice(1)
                        ? "text-white"
                        : "text-white/50 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-[28px] leading-none text-white/70 transition hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[9997] overflow-y-auto bg-black/80 lg:hidden">
          <div className="absolute inset-x-5 top-[60px] z-[9998] rounded-md bg-white py-[10px] shadow-soft">
            <ul>
              {navLinks.map((item) => (
                <MobileNav
                  key={item.label}
                  item={item}
                  close={() => setMobileOpen(false)}
                />
              ))}
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="absolute right-[15px] top-[15px] z-[9999] text-[32px] leading-none text-white"
            aria-label="Close navigation"
          >
            <BiX />
          </button>
        </div>
      )}
    </header>
  );
}