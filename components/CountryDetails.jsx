"use client";

import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import Reveal from "@/components/Reveal";

export default function CountryDetails() {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] dark:bg-[#06121F] text-[#071527] dark:text-white">
      {/* BACKGROUND GLOWS */}
      <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl md:h-[500px] md:w-[500px]" />

      <div className="absolute right-0 bottom-0 h-[250px] w-[250px] rounded-full bg-[#F5A623]/10 blur-3xl md:h-[400px] md:w-[400px]" />

      {/* GRID TEXTURE */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {countries.map((country, index) => {
        const accent =
          index === 0
            ? "#F5A623"
            : index === 1
            ? "#22D3EE"
            : index === 2
            ? "#A855F7"
            : index === 3
            ? "#EC4899"
            : "#FB7185";

        return (
          <div
            key={country.slug}
            id={country.slug}
            className="relative border-b border-black/10 dark:border-white/10 px-5 py-20 md:px-6 md:py-28"
          >
            <div className="container-custom relative z-10">
              {/* ATMOSPHERIC IMAGE */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute right-0 top-0 h-full w-full object-cover opacity-[0.03] dark:opacity-[0.04] blur-[2px] lg:w-1/2"
              />

              <div className="grid gap-12 md:gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                {/* LEFT SIDE */}
                <Reveal>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <p
                      className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm"
                      style={{ color: accent }}
                    >
                      Destination 0{index + 1}
                    </p>

                    <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                      {country.name}
                    </h2>

                    <p className="mt-6 max-w-xl text-base leading-8 text-[#071527]/65 dark:text-white/65 sm:text-lg md:mt-8 md:leading-9">
                      {country.intro}
                    </p>

                    {/* STATS */}
                    <div className="mt-8 grid grid-cols-2 gap-4 md:mt-10 md:gap-5">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-5 backdrop-blur-xl md:p-6"
                      >
                        <h3
                          className="text-3xl font-black md:text-4xl"
                          style={{ color: accent }}
                        >
                          {country.courses.length}+
                        </h3>

                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/45 dark:text-white/45 sm:text-sm">
                          Courses
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-5 backdrop-blur-xl md:p-6"
                      >
                        <h3
                          className="text-3xl font-black md:text-4xl"
                          style={{ color: accent }}
                        >
                          {country.universities.length}+
                        </h3>

                        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-black/45 dark:text-white/45 sm:text-sm">
                          Universities
                        </p>
                      </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      href="#contact"
                      className="mt-8 inline-flex rounded-full px-7 py-4 text-base font-bold text-[#06121F] shadow-[0_0_40px_rgba(255,255,255,0.12)] transition md:mt-10 md:px-8 md:text-lg"
                      style={{
                        backgroundColor: accent,
                      }}
                    >
                      Enquire about {country.name}
                    </motion.a>
                  </motion.div>
                </Reveal>

                {/* RIGHT SIDE */}
                <Reveal delay={0.1}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-6 md:space-y-8"
                  >
                    {/* WHY CHOOSE */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-6 shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl md:rounded-[2.5rem] md:p-8"
                    >
                      <h3 className="text-2xl font-black text-[#071527] dark:text-white md:text-3xl">
                        Why choose to study here?
                      </h3>

                      <div className="mt-6 grid gap-4 md:mt-8 md:gap-5">
                        {country.whyChoose.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 md:gap-4"
                          >
                            <div
                              className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm shadow-[0_0_25px_rgba(255,255,255,0.12)] md:h-8 md:w-8"
                              style={{
                                backgroundColor: `${accent}20`,
                                color: accent,
                              }}
                            >
                              ✓
                            </div>

                            <p className="text-sm leading-7 text-[#071527]/70 dark:text-white/70 md:text-base">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    {/* COURSES + UNIVERSITIES */}
                    <div
                      id={index === 0 ? "courses" : undefined}
                      className="grid gap-6 md:gap-8 lg:grid-cols-2"
                    >
                      {/* COURSES */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-6 shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:rounded-[2.5rem] md:p-8"
                      >
                        <h3 className="text-2xl font-black text-[#071527] dark:text-white md:text-3xl">
                          Courses
                        </h3>

                        <div className="mt-6 flex flex-wrap gap-2 md:mt-7 md:gap-3">
                          {country.courses.map((course) => (
                            <span
                              key={course}
                              className="rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 px-4 py-2 text-xs text-[#071527]/75 dark:text-white/75 backdrop-blur-xl transition sm:text-sm"
                              style={{
                                borderColor: `${accent}20`,
                              }}
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </motion.div>

                      {/* UNIVERSITIES */}
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-6 shadow-[0_10px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:rounded-[2.5rem] md:p-8"
                      >
                        <h3 className="text-2xl font-black text-[#071527] dark:text-white md:text-3xl">
                          Universities
                        </h3>

                        <div className="mt-6 space-y-3 md:mt-7 md:space-y-4">
                          {country.universities.map((university) => (
                            <div
                              key={university}
                              className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/5 p-4 text-sm text-[#071527]/70 dark:text-white/70 transition md:text-base"
                            >
                              {university}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </Reveal>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}