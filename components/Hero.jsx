"use client";

import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#0B0B0B] via-[#121212] to-[#1A1A1A] px-5 pt-32 pb-20 md:px-6 md:pt-28"
    >
      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#06121F] via-[#06121F]/70 to-transparent" />

      {/* GLOWS */}
      <div className="absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 grid items-center gap-12 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <Reveal>
          <div>
            {/* BADGE */}
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs text-white/80 backdrop-blur sm:text-sm">
              Study Abroad Guidance for Students & Parents
            </div>

            {/* HEADING */}
            <h1 className="max-w-3xl text-[3.4rem] font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl md:text-7xl">
              Your future
              <span className="block text-[#F5A623]">
                begins beyond
              </span>
              borders.
            </h1>

            {/* TEXT */}
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Explore trusted study abroad opportunities in Romania, Germany,
              Singapore, Thailand, and China with expert guidance from country
              selection to university admission.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#countries"
                className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-semibold text-[#071527] transition hover:bg-[#FFD27A]"
              >
                Explore Countries
              </a>

              <a
                href="#contact"
                className="w-fit rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#071527]"
              >
                Book Free Counselling
              </a>
            </div>
          </div>
        </Reveal>

        {/* RIGHT SIDE CARD */}
        <Reveal delay={0.2}>
          <div className="relative hidden lg:block">
            {/* GLOW */}
            <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#F5A623]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
              {/* HEADER */}
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#F5A623]">
                    Destinations
                  </p>

                  <h3 className="mt-3 text-3xl font-bold text-white">
                    Global Opportunities
                  </h3>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5A623] text-2xl text-black">
                  →
                </div>
              </div>

              {/* DESTINATIONS */}
              <div className="space-y-4">
                {[
                  ["Romania", "Affordable European Education"],
                  ["Germany", "Research & Engineering Excellence"],
                  ["Singapore", "Asia’s Innovation Hub"],
                  ["Thailand", "International Student Lifestyle"],
                  ["China", "Global Technology & Business"],
                ].map(([country, desc], index) => (
                  <motion.div
                    key={country}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 transition duration-500 hover:bg-white/10"
                  >
                    {/* SHINE */}
                    <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute inset-y-0 -left-1/2 w-1/2 rotate-12 bg-white/10 blur-3xl transition-all duration-1000 group-hover:left-[120%]" />
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {country}
                        </h4>

                        <p className="mt-1 text-sm text-white/60">
                          {desc}
                        </p>
                      </div>

                      <div className="text-white/30 transition duration-300 group-hover:translate-x-1 group-hover:text-[#F5A623]">
                        0{index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* STATS */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  ["500+", "Students"],
                  ["95%", "Visa Success"],
                  ["Top", "Universities"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  >
                    <h4 className="text-2xl font-bold text-white">
                      {value}
                    </h4>

                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* SCROLL TEXT */}
      <div className="absolute bottom-12 left-10 hidden items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/40 md:flex">
        <span className="h-px w-16 bg-white/20" />
        Scroll to explore
      </div>
    </section>
  );
}