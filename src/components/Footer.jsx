import {
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoSkype,
  BiLogoLinkedin,
} from "react-icons/bi";

const socials = [
  { icon: BiLogoTwitter, href: "#" },
  { icon: BiLogoFacebook, href: "#" },
  { icon: BiLogoInstagram, href: "#" },
  { icon: BiLogoSkype, href: "#" },
  { icon: BiLogoLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-dark-gradient py-[30px] text-center text-white">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
      <div className="container relative">
        <h3 className="mb-[15px] font-heading text-4xl font-bold text-white">
          Soft<span className="text-accent-light">Land</span>
        </h3>
        <p className="mb-[30px] text-[15px] italic text-white/80">
          Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi
          fuga maxime saepe commodi placeat.
        </p>

        <div className="mb-[30px] flex justify-center">
          {socials.map((s, i) => {
            const Icon = s.icon;
            return (
              <a
                key={i}
                href={s.href}
                className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-base text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent-gradient"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <div className="border-t border-white/10 pt-[25px]">
          <div className="text-sm">
            <span>Copyright</span>{" "}
            <strong className="px-1">SoftLand</strong>{" "}
            <span>All Rights Reserved</span>
          </div>
          <div className="pt-[5px] text-[13px] text-white/70">
            Designed by{" "}
            <a href="https://bootstrapmade.com/" className="text-white hover:text-accent">
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
