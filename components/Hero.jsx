"use client";

import { useEffect, useState } from "react";

const slides = [
  { src: "/images/hero/slide-1.jpg", alt: "DizitalAdda students learning digital marketing" },
  { src: "/images/hero/slide-2.jpg", alt: "DizitalAdda AI and data science classroom" },
  { src: "/images/hero/slide-3.jpg", alt: "DizitalAdda cyber security practical session" },
  { src: "/images/hero/slide-4.jpg", alt: "DizitalAdda expert trainer conducting a live project" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <section
      id="dizitaladda-home-hero"
      className="relative isolate min-h-screen overflow-hidden bg-white font-[var(--font-plus-jakarta-sans)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Mobile: carousel fills the whole hero as a background. */}
      <div className="absolute inset-0 z-0 lg:hidden" aria-label="DizitalAdda campus carousel">
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="relative z-10 min-h-screen lg:grid lg:grid-cols-[55%_45%]">
        <div className="flex min-h-screen items-center px-5 py-28 sm:px-8 lg:px-[clamp(3rem,6vw,7rem)] lg:py-24">
          <div className="mx-auto w-full max-w-[680px] lg:mx-0">
            <div className="mb-4 inline-flex items-center bg-[#2e1749] px-4 py-2 text-xs font-bold text-white rounded-r-full sm:text-sm">
              Trusted By 25000+ Students Since 2009.
            </div>
            <div className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-bold text-violet-800 lg:bg-violet-700 lg:text-white sm:text-sm lg:ml-3">
              100% Placement Assistance
            </div>

            <h1 className="max-w-[680px] text-[clamp(2.25rem,7vw,3.75rem)] font-extrabold leading-[1.12] tracking-[-0.035em] text-white lg:text-[clamp(2.75rem,4vw,4.15rem)] lg:text-[#17131d]">
              India&apos;s Best{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent lg:from-violet-700 lg:to-fuchsia-600">
                Digital Marketing Institute
              </span>{" "}
              |{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 to-violet-300 bg-clip-text text-transparent lg:from-violet-700 lg:to-fuchsia-600">
                AI, Data Science &amp; Cyber Security
              </span>{" "}
              Courses
            </h1>

            <p className="mt-5 max-w-[620px] text-base leading-7 text-gray-200 sm:text-lg lg:text-[#5f5a65]">
              Live projects, real campaigns and expert mentors at DizitalAdda. Build career-focused, job-ready skills that get you hired or help you grow your own business.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#bookDemo"
                className="inline-flex min-h-[54px] items-center justify-center rounded-xl bg-gradient-to-r from-violet-700 to-fuchsia-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_rgba(124,58,237,.24)] transition-transform hover:-translate-y-0.5"
              >
                Book Free Demo Class
              </a>
              <a
                href="/assets/pdfs/Digital-Marketing-Course-for-Professionals.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-xl border-2 border-white px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10 lg:border-violet-700 lg:text-violet-800 lg:hover:bg-violet-50"
              >
                Download Brochure
              </a>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/25 pt-6 text-center lg:max-w-[590px] lg:border-t-[#ece7ef] lg:text-left" aria-label="DizitalAdda at a glance">
              <div>
                <strong className="block text-[clamp(1.35rem,5vw,1.75rem)] font-extrabold text-white lg:text-[#17131d]">25000+</strong>
                <span className="mt-1 block text-xs text-gray-200 lg:text-[#68636c]">Students trained</span>
              </div>
              <div>
                <strong className="block text-[clamp(1.35rem,5vw,1.75rem)] font-extrabold text-white lg:text-[#17131d]">20+</strong>
                <span className="mt-1 block text-xs text-gray-200 lg:text-[#68636c]">Courses</span>
              </div>
              <div>
                <strong className="block text-[clamp(1.35rem,5vw,1.75rem)] font-extrabold text-white lg:text-[#17131d]">100%</strong>
                <span className="mt-1 block text-xs text-gray-200 lg:text-[#68636c]">Practical learning</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop: image carousel occupies the right half with a slanted divider. */}
        <div className="relative hidden h-full lg:block">
          <div
            className="-ml-16 h-full overflow-hidden bg-[#170c25]"
            style={{ clipPath: "polygon(8rem 0, 100% 0, 100% 100%, 0 100%)" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {slides.map((slide, index) => (
              <img
                key={slide.src}
                src={slide.src}
                alt={slide.alt}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                  index === activeSlide ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />

            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="absolute left-20 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-black/55"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="absolute right-6 top-1/2 z-20 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-black/30 text-2xl text-white backdrop-blur transition hover:bg-black/55"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 lg:hidden" aria-label="Choose hero slide">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-7 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Desktop dots stay above the image gradient. */}
      <div className="absolute bottom-7 left-[calc(55%-2.5rem)] z-30 hidden -translate-x-1/2 items-center gap-2 lg:flex" aria-label="Choose hero slide">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide}
            onClick={() => setActiveSlide(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeSlide ? "w-7 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
