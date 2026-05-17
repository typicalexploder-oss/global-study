"use client";

import { motion } from "framer-motion";
import { countries } from "@/data/countries";
import Reveal from "@/components/Reveal";

export default function Countries() {
  return (
    <section
      id="countries"
      className="relative overflow-hidden bg-[#f8f6f2] dark:bg-gradient-to-b dark:from-[#0B0B0B] dark:via-[#121212] dark:to-[#1A1A1A] px-5 py-20 text-[#111111] dark:text-white md:px-6 md:py-32"
    >
      {/* GLOWS */}
      <div className="absolute left-0 top-40 h-[300px] w-[300px] rounded-full bg-[#7C3AED]/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="absolute right-0 top-20 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl md:h-[400px] md:w-[400px]" />

      <div className="absolute bottom-0 left-1/3 h-[250px] w-[250px] rounded-full bg-[#F5A623]/10 blur-3xl md:h-[350px] md:w-[350px]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* HEADING */}
        <Reveal>
          <div className="mb-14 max-w-4xl md:mb-20">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
              Study Destinations
            </p>

            <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Explore Global
              <span className="block text-[#F5A623]">
                Education Destinations.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/60 md:mt-8 md:text-lg">
              Discover international study opportunities across leading education
              destinations with globally recognized universities, career pathways,
              and student-focused environments.
            </p>
          </div>
        </Reveal>

        {/* COUNTRY CARDS */}
        <div className="space-y-6 md:space-y-8">
          {countries.map((country, index) => (
            <Reveal
              delay={index * 0.08}
              key={country.slug}
            >
              <motion.a
                href={`/countries/${country.slug}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="group relative block overflow-hidden rounded-[2.5rem] md:rounded-[3rem]"
              >
                {/* CARD */}
                <div className="relative h-[440px] overflow-hidden border border-black/10 dark:border-white/10 shadow-[0_25px_100px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_100px_rgba(0,0,0,0.45)] sm:h-[500px] md:h-[560px]">
                  {/* IMAGE */}
                  <img
                    src={country.image}
                    alt={country.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAYS */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40 dark:from-black/80 dark:via-black/30 dark:to-black/40" />

                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-[#06121F] dark:via-transparent dark:to-transparent opacity-80" />

                  {/* CONTENT */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-14">
                    {/* TOP */}
                    <div className="flex items-start justify-between">
                      <div className="rounded-full border border-white/20 bg-white/20 px-4 py-2 backdrop-blur-xl">
                        <p className="text-xs uppercase tracking-[0.25em] text-white sm:text-sm">
                          Destination 0{index + 1}
                        </p>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/20 text-xl text-white backdrop-blur-xl transition duration-300 group-hover:scale-110 group-hover:bg-[#F5A623] group-hover:text-black md:h-16 md:w-16 md:text-2xl">
                        →
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div>
                      <h3 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl md:text-7xl">
                        {country.name}
                      </h3>

                      <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:mt-6 md:text-lg md:leading-8">
                        {country.tagline}
                      </p>

                      {/* TAGS */}
                      <div className="mt-5 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                        {country.courses.slice(0, 4).map((course) => (
                          <div
                            key={course}
                            className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-xl sm:text-sm"
                          >
                            {course}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}