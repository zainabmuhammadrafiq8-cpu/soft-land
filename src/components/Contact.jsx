import { useState } from "react";
import {
  BiMapPin,
  BiPhone,
  BiEnvelope,
  BiLogoTwitter,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const infoItems = [
  { icon: BiMapPin, title: "Address", value: "A108 Adam Street, New York, NY 535022" },
  { icon: BiPhone, title: "Call Us", value: "+1 5589 55488 55" },
  { icon: BiEnvelope, title: "Email Us", value: "info@example.com" },
];

const socials = [BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    }, 1000);
  };

  const inputClass =
    "w-full rounded-xl border border-black/10 bg-light-bg/50 px-4 py-3 text-sm text-body transition placeholder:text-body/30 focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/20";

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container section-title" data-aos="fade-up">
        <h2  className="text-center text-2xl font-bold">Contact</h2>
        <p  className="text-center py-10">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl bg-dark-gradient p-9 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/30 blur-3xl" />
              <div className="relative">
                <h3 className="font-heading text-2xl font-bold text-white">
                  Let's talk
                </h3>
                <p className="mt-2 text-sm text-white/60">
                  Have a question or want a demo? Drop us a line and we'll get
                  back within 24 hours.
                </p>

                <div className="mt-8 space-y-6">
                  {infoItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-4">
                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-accent-light">
                          <Icon />
                        </span>
                        <div>
                          <h4 className="font-heading text-sm font-semibold text-white">
                            {item.title}
                          </h4>
                          <p className="text-sm text-white/60">{item.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-9 flex gap-3">
                  {socials.map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition duration-300 hover:-translate-y-0.5 hover:bg-accent-gradient"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="h-full rounded-3xl border border-black/5 bg-white p-7 shadow-card md:p-9"
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your Email"
                  required
                />
                <div className="md:col-span-2">
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className={inputClass}
                    placeholder="Message"
                    required
                  />
                </div>
                <div className="text-center md:col-span-2">
                  {status === "loading" && (
                    <div className="mb-5 flex items-center justify-center gap-2 text-body">
                      <span className="inline-block h-5 w-5 animate-spin rounded-full border-[3px] border-accent border-t-transparent" />
                      Loading
                    </div>
                  )}
                  {status === "sent" && (
                    <div className="mb-5 rounded-xl bg-mint/15 py-3 font-semibold text-mint">
                      Your message has been sent. Thank you!
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-full bg-accent-gradient px-8 py-3 font-heading font-medium text-white shadow-lg shadow-accent/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35 disabled:opacity-60"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
