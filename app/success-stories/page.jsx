"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const stories = [
  {
    name: "Arjun Menon",
    country: "Germany",
    course: "Mechanical Engineering",
    university: "Technical University of Munich",
    text: "Global Study helped me throughout the admission and visa process. Today I’m studying at one of Germany’s top engineering universities.",
  },
  {
    name: "Sarah Thomas",
    country: "Singapore",
    course: "Business Management",
    university: "National University of Singapore",
    text: "From university selection to scholarship guidance, the team supported me at every step of my journey abroad.",
  },
  {
    name: "Rahul Nair",
    country: "Romania",
    course: "MBBS",
    university: "University of Bucharest",
    text: "The counselling and documentation support made the process smooth and stress-free for my medical admission abroad.",
  },
];

const testimonials = [
  {
    quote:
      "Professional guidance, transparent communication, and complete support throughout my application process.",
    author: "Engineering Student — Germany",
  },
  {
    quote:
      "Their scholarship guidance helped reduce my financial burden significantly.",
    author: "Business Student — Singapore",
  },
  {
    quote:
      "The visa preparation support gave me confidence during the interview process.",
    author: "Medical Student — Romania",
  },
  {
    quote:
      "The team explained every step clearly and made the university application process stress free.",
    author: "AI Student — Thailand",
  },
  {
    quote:
      "I received complete support for accommodation, visa, and pre-departure preparation.",
    author: "Nursing Student — Germany",
  },
  {
    quote:
      "Their counselling helped me choose the right country and university based on my budget.",
    author: "Engineering Student — Singapore",
  },
  {
    quote:
      "The documentation guidance was extremely professional and organized.",
    author: "Business Student — Romania",
  },
  {
    quote:
      "I was confused about scholarships initially, but the team guided me perfectly.",
    author: "Cybersecurity Student — Germany",
  },
];

export default function SuccessStoriesPage() {
  return (
    <main className="relative overflow-hidden bg-[#F7F9FC] text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white">
      {/* LIGHT GLOWS */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute left-[-10%] top-20 h-[420px] w-[420px] rounded-full bg-[#F5A623]/18 blur-[120px]" />

        <div className="absolute right-[-10%] top-40 h-[420px] w-[420px] rounded-full bg-cyan-400/14 blur-[130px]" />

        <div className="absolute bottom-[-10%] left-1/3 h-[340px] w-[340px] rounded-full bg-purple-400/12 blur-[120px]" />
      </div>

      {/* DARK GLOWS */}
      <div className="absolute inset-0 hidden dark:block">
        <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

        <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5A623]/10 blur-3xl" />
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
      <section className="relative px-5 pb-16 pt-36 md:px-6 md:pb-24 md:pt-40">
        <div className="container-custom relative z-10">
          <Reveal>
            <div className="max-w-5xl">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Student Success Stories
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Real students.
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  Real global journeys.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg md:text-xl md:leading-9">
                Explore how students transformed their academic and career
                futures through international education opportunities across
                leading global destinations.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STORIES */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Student Journeys
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Inspiring academic success across the world.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {stories.map((story, index) => (
              <Reveal
                key={story.name}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5A623]/10 text-2xl font-bold text-[#B45309]">
                    {story.name.charAt(0)}
                  </div>

                  <h3 className="text-2xl font-black text-[#07182B] dark:text-white">
                    {story.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309]">
                    {story.country}
                  </p>

                  <div className="mt-6 space-y-3">
                    <p className="text-black/70 dark:text-white/70">
                      <span className="font-bold">Course:</span>{" "}
                      {story.course}
                    </p>

                    <p className="text-black/70 dark:text-white/70">
                      <span className="font-bold">University:</span>{" "}
                      {story.university}
                    </p>
                  </div>

                  <p className="mt-6 leading-8 text-black/60 dark:text-white/60">
                    {story.text}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative overflow-hidden bg-[#F7F9FC] py-20 transition-colors duration-500 dark:bg-[#06121F] md:py-28">
        <div className="mb-16 px-5 text-center md:px-6">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Testimonials
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                What students say about us.
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="relative flex overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            className="flex min-w-max gap-8 px-5"
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="group w-[340px] shrink-0 rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition duration-300 hover:shadow-[0_25px_100px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.04]"
              >
                <div className="mb-6 text-5xl text-[#F5A623]">
                  “
                </div>

                <p className="leading-8 text-black/70 dark:text-white/70">
                  {item.quote}
                </p>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309]">
                  {item.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["500+", "Students Guided"],
              ["95%", "Visa Success Rate"],
              ["150+", "Partner Universities"],
              ["5+", "Study Destinations"],
            ].map(([value, label], index) => (
              <Reveal
                key={label}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 text-center shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-500 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <h3 className="text-5xl font-black text-[#B45309]">
                    {value}
                  </h3>

                  <p className="mt-4 text-sm uppercase tracking-[0.3em] text-black/45 dark:text-white/45">
                    {label}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-10 md:px-6 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-gradient-to-br from-[#F5A623]/10 via-white/80 to-cyan-100/70 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-all duration-500 dark:border-white/10 dark:from-[#F5A623]/15 dark:via-white/[0.03] dark:to-[#7C3AED]/10 dark:shadow-[0_25px_100px_rgba(0,0,0,0.4)] md:p-16"
            >
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Your Journey Starts Here
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                  Become our next international success story.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg">
                  Connect with our advisors and begin your journey toward
                  internationally recognized education and global opportunities.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </Link>

                  <Link
                    href="/universities"
                    className="w-fit rounded-full border border-black/10 bg-white/70 px-8 py-4 font-semibold text-[#07182B] transition hover:bg-[#07182B] hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
                  >
                    Explore Universities
                  </Link>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}