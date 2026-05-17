"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const countries = {
  india: {
    name: "India",
    tagline: "Flexible Online Degrees & Modern Learning",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1800&auto=format&fit=crop",

    description:
      "India offers globally accessible online degree programs through top universities with affordable tuition, flexible schedules, and industry-focused education.",

    highlights: [
      "Affordable Online Degrees",
      "UGC Approved Universities",
      "Flexible Learning",
      "Industry-Oriented Curriculum",
    ],

    programs: ["Online MBA", "BCA", "MCA", "BCom", "BBA"],

    universities: ["JAIN Online", "Yenepoya Online"],

    tuition: "$1,000 - $4,000 / year",

    careers:
      "Business Management, IT, Marketing, Finance, Data Analytics, Healthcare Administration.",

    scholarships:
      "Merit scholarships and flexible payment options available for selected programs.",

    visa:
      "No visa required for fully online international programs.",

    faqs: [
      {
        q: "Are online degrees from Indian universities valid?",
        a: "Yes. Universities like JAIN Online and Yenepoya Online offer UGC-approved online degree programs recognized across India and internationally.",
      },

      {
        q: "Can international students apply for online Indian programs?",
        a: "Yes. Students from different countries can enroll in online programs without requiring a student visa.",
      },

      {
        q: "What are the most popular online programs?",
        a: "MBA, BCA, MCA, BBA, and BCom are among the most demanded online programs.",
      },

      {
        q: "Are online classes flexible?",
        a: "Yes. Most online universities provide recorded lectures, live sessions, and flexible learning schedules.",
      },
    ],
  },

  romania: {
    name: "Romania",
    tagline:
      "Affordable European education with globally recognized degrees.",
    image:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1800&auto=format&fit=crop",
    tuition: "€3,000 - €8,000 / year",
    living: "€300 - €700 / month",
    intake: "September & February",
    visa: "Student visa processing: 4-8 weeks",
    duration: "3 - 6 Years",
    eligibility:
      "High school completion, academic transcripts, passport, English proficiency (depends on program).",
    scholarships:
      "Merit scholarships, university grants, and selected government-funded opportunities.",
    careers:
      "Medicine, Engineering, IT, Business, Research, Hospitality, and Healthcare.",
    universities: [
      "Carol Davila University",
      "University of Bucharest",
      "Politehnica University of Bucharest",
      "Babes-Bolyai University",
    ],
    programs: [
      "MBBS",
      "Engineering",
      "Computer Science",
      "Dentistry",
      "Business Administration",
    ],
    faqs: [
      {
        q: "Is Romania good for MBBS?",
        a: "Romania is one of Europe’s fastest-growing destinations for affordable and internationally recognized medical education.",
      },
      {
        q: "Can students work while studying?",
        a: "Yes, international students may work part-time depending on visa regulations.",
      },
      {
        q: "Are programs available in English?",
        a: "Many Romanian universities offer complete English-taught programs for international students.",
      },
    ],
  },

  germany: {
    name: "Germany",
    tagline:
      "World-class education and global career opportunities.",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1800&auto=format&fit=crop",
    tuition: "€0 - €5,000 / year",
    living: "€700 - €1,200 / month",
    intake: "October & April",
    visa: "Student visa processing: 6-12 weeks",
    duration: "2 - 5 Years",
    eligibility:
      "Academic transcripts, passport, SOP, financial proof, and language proficiency.",
    scholarships:
      "DAAD scholarships, university grants, and research assistant opportunities.",
    careers:
      "Engineering, Automotive, AI, Robotics, Business, and Research.",
    universities: [
      "Technical University of Munich",
      "Heidelberg University",
      "RWTH Aachen",
      "Ludwig Maximilian University",
    ],
    programs: [
      "Engineering",
      "Artificial Intelligence",
      "Business",
      "Data Science",
      "Automotive Engineering",
    ],
    faqs: [
      {
        q: "Is Germany affordable for students?",
        a: "Public universities in Germany often offer low or no tuition fees for international students.",
      },
      {
        q: "Can students stay after graduation?",
        a: "Yes, Germany provides post-study work opportunities for graduates.",
      },
      {
        q: "Are English programs available?",
        a: "Many universities offer English-taught master’s and selected bachelor’s programs.",
      },
    ],
  },

  singapore: {
    name: "Singapore",
    tagline:
      "Asia’s innovation and technology education hub.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1800&auto=format&fit=crop",
    tuition: "$8,000 - $25,000 / year",
    living: "$800 - $1,800 / month",
    intake: "January & August",
    visa: "Student visa processing: 2-6 weeks",
    duration: "2 - 4 Years",
    eligibility:
      "Strong academics, English proficiency, passport, and admission confirmation.",
    scholarships:
      "Government scholarships, university grants, and ASEAN-focused scholarships.",
    careers:
      "Finance, AI, Technology, Business, Hospitality, and Logistics.",
    universities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
    ],
    programs: [
      "Computer Science",
      "Business",
      "Finance",
      "Cybersecurity",
      "Hospitality Management",
    ],
    faqs: [
      {
        q: "Why study in Singapore?",
        a: "Singapore offers globally ranked universities and strong international career exposure.",
      },
      {
        q: "Is Singapore safe for students?",
        a: "Singapore is considered one of the safest countries for international students.",
      },
      {
        q: "Can international students work?",
        a: "Yes, students may work part-time under approved visa regulations.",
      },
    ],
  },

  thailand: {
    name: "Thailand",
    tagline:
      "Affordable education with cultural diversity.",
    image:
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1800&auto=format&fit=crop",
    tuition: "$2,000 - $8,000 / year",
    living: "$300 - $800 / month",
    intake: "January & August",
    visa: "Student visa processing: 2-5 weeks",
    duration: "2 - 4 Years",
    eligibility:
      "Academic transcripts, passport, and English proficiency.",
    scholarships:
      "Selected university scholarships available.",
    careers:
      "Hospitality, tourism, business, healthcare, and IT.",
    universities: [
      "Mahidol University",
      "Chulalongkorn University",
    ],
    programs: ["Business", "Hospitality", "IT", "Healthcare"],
    faqs: [
      {
        q: "Is Thailand affordable for students?",
        a: "Yes, Thailand offers affordable tuition and living costs.",
      },
    ],
  },

  china: {
    name: "China",
    tagline:
      "Modern universities and global opportunities.",
    image:
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1800&auto=format&fit=crop",
    tuition: "$3,000 - $10,000 / year",
    living: "$400 - $900 / month",
    intake: "March & September",
    visa: "Student visa processing: 2-6 weeks",
    duration: "3 - 5 Years",
    eligibility:
      "Academic records, passport, and university admission.",
    scholarships:
      "CSC scholarships and university grants available.",
    careers:
      "Engineering, medicine, AI, business, and technology.",
    universities: ["Tsinghua University", "Peking University"],
    programs: ["Medicine", "Engineering", "AI", "Business"],
    faqs: [
      {
        q: "Is China good for international students?",
        a: "Yes, China offers strong universities and modern campuses.",
      },
    ],
  },
};

export default function CountryPage({ params }) {
  const resolvedParams = use(params);
  const country = countries[resolvedParams.slug];

  if (!country) {
    notFound();
  }

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
        <div className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

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
      <section className="relative px-5 pb-16 pt-40 md:px-6 md:pb-24 md:pt-44">
        <div className="container-custom">
          {/* BACK */}
          <div className="mb-14">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#07182B] backdrop-blur-xl transition hover:bg-[#07182B] hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
            >
              ← Back to Home
            </Link>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                  Study in {country.name}
                </p>

                <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {country.name}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-black/65 dark:text-white/65">
                  {country.tagline}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {country.programs.map((program) => (
                    <span
                      key={program}
                      className="rounded-full border border-black/10 bg-white/70 px-5 py-3 text-sm font-medium text-[#07182B] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-white/80"
                    >
                      {program}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* RIGHT IMAGE */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[3rem] border border-black/10 shadow-[0_30px_120px_rgba(0,0,0,0.12)] dark:border-white/10 dark:shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="h-[500px] w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Tuition Fees", country.tuition],
              ["Living Costs", country.living],
              ["Intakes", country.intake],
              ["Program Duration", country.duration],
            ].map(([title, value]) => (
              <Reveal key={title}>
                <div className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    {title}
                  </p>

                  <h3 className="mt-5 text-3xl font-black leading-tight">
                    {value}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>

          {/* DETAILS */}
          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            {/* LEFT */}
            <Reveal>
              <div className="rounded-[3rem] border border-black/10 bg-white/85 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Eligibility
                </p>

                <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                  {country.eligibility}
                </p>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Scholarships
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                    {country.scholarships}
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Visa Process
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                    {country.visa}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.1}>
              <div className="rounded-[3rem] border border-black/10 bg-white/85 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Top Universities
                </p>

                <div className="mt-8 space-y-5">
                  {country.universities.map((uni) => (
                    <div
                      key={uni}
                      className="rounded-2xl border border-black/10 bg-[#F7F9FC] p-5 dark:border-white/10 dark:bg-white/[0.03]"
                    >
                      <h3 className="text-xl font-bold">{uni}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Career Opportunities
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70 dark:text-white/70">
                    {country.careers}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-5 py-20 md:px-6 md:py-28">
        <div className="container-custom">
          <Reveal>
            <div className="max-w-4xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                Frequently Asked Questions
              </p>

              <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Everything students ask before studying in{" "}
                {country.name}.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 space-y-6">
            {country.faqs.map((faq, index) => (
              <Reveal
                key={faq.q}
                delay={index * 0.08}
              >
                <div className="rounded-[2rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
                  <h3 className="text-2xl font-black">{faq.q}</h3>

                  <p className="mt-5 leading-8 text-black/65 dark:text-white/65">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-5 pb-24 pt-6 md:px-6 md:pb-32">
        <div className="container-custom">
          <Reveal>
            <motion.div
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-gradient-to-br from-[#F5A623]/10 via-white/80 to-cyan-100/70 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-all duration-500 dark:border-white/10 dark:from-[#F5A623]/15 dark:via-white/[0.03] dark:to-[#7C3AED]/10 dark:shadow-[0_25px_100px_rgba(0,0,0,0.4)] md:p-16"
            >
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Start Your Journey
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                  Ready to study in {country.name}?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg">
                  Connect with our study abroad experts and receive personalized
                  counselling, university guidance, visa support, and
                  scholarship assistance.
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