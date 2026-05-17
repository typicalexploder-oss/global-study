"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

const destinations = [
  ["Romania", "Affordable European Education"],
  ["Germany", "Research & Engineering Excellence"],
  ["Singapore", "Asia’s Innovation Hub"],
  ["Thailand", "International Student Lifestyle"],
  ["China", "Global Technology & Business"],
];

const stats = [
  ["500+", "Students"],
  ["95%", "Visa Success"],
  ["Top", "Universities"],
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F7F9FC] px-5 pb-20 pt-32 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:pt-28"
    >
      {/* LIGHT BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 dark:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F7F9FC] via-[#EEF3FA] to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC]/80 to-transparent" />

        <div className="absolute left-[-12%] top-20 h-[520px] w-[520px] rounded-full bg-[#F5A623]/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-36 h-[520px] w-[520px] rounded-full bg-cyan-400/18 blur-[130px]" />
        <div className="absolute bottom-[-20%] left-1/3 h-[460px] w-[460px] rounded-full bg-purple-400/14 blur-[130px]" />
      </div>

      {/* DARK BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 hidden dark:block">
        <div className="absolute inset-0 bg-gradient-to-br from-[#06121F] via-[#081A2E] to-[#111827]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06121F] via-[#06121F]/70 to-transparent" />

        <div className="absolute left-[-10%] top-20 h-[520px] w-[520px] rounded-full bg-[#7C3AED]/12 blur-[130px]" />
        <div className="absolute right-[-10%] top-40 h-[520px] w-[520px] rounded-full bg-purple-500/12 blur-[130px]" />
        <div className="absolute bottom-[-15%] left-1/3 h-[430px] w-[430px] rounded-full bg-[#F5A623]/10 blur-[130px]" />
      </div>

      {/* LIGHT DOTS */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.2] dark:hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(7, 24, 43, 0.2) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* DARK DOTS */}
      <div
        className="pointer-events-none absolute inset-0 hidden opacity-[0.08] dark:block"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255, 255, 255, 0.35) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            <div className="mb-6 inline-flex rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs text-black/70 shadow-sm backdrop-blur-xl transition-colors duration-500 dark:border-white/15 dark:bg-white/10 dark:text-white/80 sm:text-sm">
              Study Abroad Guidance for Students & Parents
            </div>

            <motion.h1
              className="text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.18,
                  },
                },
              }}
            >
              {["Your", "future", "begins", "beyond", "borders."].map(
                (word, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className={`mr-4 inline-block ${
                      word === "begins" || word === "beyond"
                        ? "text-[#F5A623]"
                        : "text-[#07182B] dark:text-white"
                    }`}
                  >
                    {word}
                  </motion.span>
                )
              )}
            </motion.h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 transition-colors duration-500 dark:text-white/75 sm:text-lg">
              Explore trusted study abroad opportunities in Romania, Germany,
              Singapore, Thailand, and China with expert guidance from country
              selection to university admission.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#countries"
                className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-semibold text-[#071527] shadow-[0_12px_30px_rgba(245,166,35,0.25)] transition hover:bg-[#FFD27A]"
              >
                Explore Countries
              </a>

              <a
                href="#contact"
                className="w-fit rounded-full border border-black/10 bg-white/80 px-8 py-4 font-semibold text-[#07182B] shadow-sm backdrop-blur-xl transition hover:bg-[#07182B] hover:text-white dark:border-white/25 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#071527]"
              >
                Book Free Counselling
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE CARD */}
        <Reveal delay={0.2}>
          <div className="relative hidden lg:block">
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#F5A623]/20 blur-3xl dark:bg-[#F5A623]/10" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/85 p-6 shadow-[0_25px_90px_rgba(7,24,43,0.12)] backdrop-blur-3xl transition-colors duration-500 dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/30 to-transparent dark:from-white/5 dark:via-transparent dark:to-transparent" />

              <div className="relative z-10">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-[#F5A623]">
                      Destinations
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-[#07182B] dark:text-white">
                      Global Opportunities
                    </h3>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5A623] text-2xl text-black shadow-[0_14px_35px_rgba(245,166,35,0.3)]">
                    →
                  </div>
                </div>

                <div className="space-y-4">
                  {destinations.map(([country, desc], index) => (
                    <motion.div
                      key={country}
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-black/10 bg-white/75 p-5 shadow-sm transition duration-500 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                        <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-white/60 blur-3xl transition-all duration-1000 group-hover:left-[120%] dark:bg-white/10" />
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-[#07182B] dark:text-white">
                            {country}
                          </h4>

                          <p className="mt-1 text-sm text-black/55 dark:text-white/60">
                            {desc}
                          </p>
                        </div>

                        <div className="text-black/30 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F5A623] dark:text-white/30">
                          0{index + 1}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {stats.map(([value, label]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-black/10 bg-white/75 p-4 text-center shadow-sm transition-colors duration-500 dark:border-white/10 dark:bg-white/5"
                    >
                      <h4 className="text-2xl font-bold text-[#07182B] dark:text-white">
                        {value}
                      </h4>

                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-black/45 dark:text-white/50">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-12 left-10 hidden items-center gap-3 text-sm uppercase tracking-[0.25em] text-black/40 dark:text-white/40 md:flex">
        <span className="h-px w-16 bg-black/20 dark:bg-white/20" />
        Scroll to explore
      </div>
    </section>
  );
}
