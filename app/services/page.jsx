"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const services = [

 {
  title: "Online Degree Admissions",
  text:
    "Get guidance for UGC-approved online degree programs including MBA, MCA, BCA, and BBA from leading Indian universities.",
  icon: "💻",
},

{
    title: "Career Counselling",
    text: "Personalized academic and career guidance to help students choose the right international pathway.",
    icon: "🎯",
  },
  {
    title: "Country Selection",
    text: "Expert recommendations on choosing the best study destination based on goals and budget.",
    icon: "🌍",
  },
  {
    title: "University Applications",
    text: "Professional assistance with university shortlisting and admission applications.",
    icon: "🏛️",
  },
  {
    title: "SOP & LOR Support",
    text: "Guidance for preparing strong Statements of Purpose and recommendation documents.",
    icon: "✍️",
  },
  {
    title: "Visa Assistance",
    text: "Step-by-step support for visa applications, documentation, and interview preparation.",
    icon: "🛂",
  },
  {
    title: "Scholarship Guidance",
    text: "Helping students explore scholarship and financial aid opportunities abroad.",
    icon: "🎓",
  },
  {
    title: "Accommodation Support",
    text: "Helping students find safe and comfortable accommodation options overseas.",
    icon: "🏠",
  },
  {
    title: "Pre-Departure Support",
    text: "Travel guidance, preparation assistance, and orientation before departure.",
    icon: "✈️",
  },
];

const process = [
  "Free Consultation",
  "Profile Evaluation",
  "Country & Course Selection",
  "University Applications",
  "Admission Guidance",
  "Visa Support",
  "Travel Preparation",
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* GLOWS */}
      <div className="absolute left-0 top-20 h-[400px] w-[400px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
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
                Our Services
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Complete support
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  for your global journey.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-white/65 sm:text-lg md:text-xl md:leading-9">
                From career counselling to visa guidance and pre-departure
                preparation, our team supports students through every stage of
                studying abroad with clarity and confidence.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                What We Offer
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Premium student support services.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.05}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] transition duration-500"
                >
                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F5A623]/10 text-3xl">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-black text-[#111111]">
                      {service.title}
                    </h3>

                    <p className="mt-5 leading-8 text-black/60">
                      {service.text}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="mb-14 max-w-4xl md:mb-20">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Our Process
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                A seamless path from consultation to campus.
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, index) => (
              <Reveal
                key={step}
                delay={index * 0.08}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
                >
                  <div className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#B45309]">
                    Step {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-2xl font-black text-[#111111]">
                    {step}
                  </h3>

                  <p className="mt-5 leading-8 text-black/60">
                    Professional support and guidance throughout this stage of
                    your study abroad journey.
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom grid gap-10 lg:grid-cols-2 lg:items-center md:gap-20">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Why Choose Us
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Trusted expertise with personalized support.
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60 sm:text-lg">
                We combine international education expertise with personalized
                student guidance to help students confidently achieve their
                academic and career ambitions abroad.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] md:p-10"
            >
              <div className="space-y-8">
                {[
                  "Personalized student counselling",
                  "Guidance for admissions and visas",
                  "Support for scholarships and accommodation",
                  "Global university partnerships",
                  "End-to-end student assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-4"
                  >
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B45309]">
                      ✓
                    </div>

                    <p className="text-lg text-black/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-10 md:px-6 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#F5A623]/15 via-white/[0.03] to-[#7C3AED]/10 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.4)] backdrop-blur-3xl md:p-16"
            >
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Begin Your Journey
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Let’s build your future abroad.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Connect with our team and explore the right international
                  education opportunities tailored to your goals.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link 
                  href="/countries/romania"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Book Free Consultation
                  </Link>

                  <Link 
                    href="/countries/romania"
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
                  >
                    Explore Destinations
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