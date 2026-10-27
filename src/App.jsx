import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Featured from "./components/Featured.jsx";
import Steps from "./components/Steps.jsx";
import Features from "./components/Features.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Pricing from "./components/Pricing.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
      offset: 60,
      disable: window.innerWidth < 768,
    });
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Preloader visible={loading} />
      <Header />
      <main>
        <Hero />
        <About />
        <Featured />
        <Steps />
        <Features />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
