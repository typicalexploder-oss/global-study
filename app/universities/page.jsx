"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const universities = [
  {
    slug: "jain-online",
    name: "JAIN Online",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop",
    tagline: "AI-Ready Online Degrees",
  },

  {
    slug: "yenepoya-online",
    name: "Yenepoya Online",
    country: "India",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1800&auto=format&fit=crop",
    tagline: "Flexible UGC Approved Learning",
  },

  {
    name: "Technical University of Munich",
    slug: "technical-university-of-munich",
    country: "Germany",
    ranking: "#1 Engineering in Germany",
    image:
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "National University of Singapore",
    slug: "national-university-of-singapore",
    country: "Singapore",
    ranking: "Top Asian University",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Carol Davila University",
    slug: "carol-davila-university",
    country: "Romania",
    ranking: "Top Medical University",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Chulalongkorn University",
    slug: "chulalongkorn-university",
    country: "Thailand",
    ranking: "Top University in Thailand",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800&auto=format&fit=crop",
  },

  {
    name: "Tsinghua University",
    slug: "tsinghua-university",
    country: "China",
    ranking: "World Leading Innovation Hub",
    image:
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1200&auto=format&fit=crop",
  },

  {
    name: "Heidelberg University",
    slug: "heidelberg-university",
    country: "Germany",
    ranking: "Historic Global Institution",
    image:
      "https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function UniversitiesPage() {
  return (
    <main className="relative overflow-hidden bg-[#F7F9FC] text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white">
      {/* LIGHT GLOWS */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#F5A623]/18 blur-[120px]" />

        <div className="absolute right-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/14 blur-[130px]" />
      </div>

      {/* DARK GLOWS */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />
      </div>

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-16 pt-36 md:px-6 md:pb-24 md:pt-40">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Global Universities
              </p>

              <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-7xl lg:text-8xl">
                Discover world-class
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  international universities.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg md:text-xl md:leading-9">
                Explore globally recognized institutions offering modern
                education, research excellence, international exposure, and
                strong career opportunities across multiple destinations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UNIVERSITIES */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {universities.map((university, index) => (
              <Reveal
                key={university.name}
                delay={index * 0.06}
              >
                <Link href={`/universities/${university.slug}`}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer overflow-hidden rounded-[2.5rem] border border-black/10 bg-white/85 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    {/* IMAGE */}
                    <div className="relative h-[260px] overflow-hidden">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      {/* LIGHT OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07182B]/80 to-transparent dark:hidden" />

                      {/* DARK OVERLAY */}
                      <div className="absolute inset-0 hidden bg-gradient-to-t from-black/80 to-transparent dark:block" />

                      <div className="absolute bottom-6 left-6">
                        <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                          {university.country}
                        </p>

                        <h3 className="mt-2 text-3xl font-black leading-tight text-white">
                          {university.name}
                        </h3>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <div className="inline-flex rounded-full bg-[#F5A623]/10 px-4 py-2 text-sm font-semibold text-[#B45309]">
                        {university.ranking || university.tagline}
                      </div>

                      <p className="mt-6 leading-8 text-black/60 dark:text-white/60">
                        Explore academic excellence, research opportunities,
                        international student experiences, and strong career
                        pathways.
                      </p>

                      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#B45309]">
                        Explore University →
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}