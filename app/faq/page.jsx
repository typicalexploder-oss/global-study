"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/Reveal";

const faqCategories = [
  "Admissions",
  "Visas",
  "Scholarships",
  "Universities",
  "Accommodation",
  "Student Support",
];

const faqs = [
  {
    question: "How do I choose the right country to study in?",
    answer:
      "Our counsellors evaluate your academic goals, budget, career interests, and preferred lifestyle to recommend the best study destinations for you.",
  },
  {
    question: "Do you assist with visa applications?",
    answer:
      "Yes. We provide complete visa assistance including document preparation, application guidance, and interview support.",
  },
  {
    question: "Can I apply for scholarships through your consultancy?",
    answer:
      "Absolutely. We help students explore merit-based and university-specific scholarships across multiple destinations.",
  },
  {
    question: "What is the student visa process like?",
    answer:
      "The visa process usually includes university admission confirmation, financial documentation, visa application submission, biometrics, and in some cases an interview.",
  },
  {
    question: "Do scholarships cover full tuition fees?",
    answer:
      "Some scholarships may fully cover tuition, while others provide partial financial support depending on academic performance and university policies.",
  },
  {
    question: "What are the eligibility requirements for studying abroad?",
    answer:
      "Eligibility depends on the course and country but generally includes academic qualifications, English proficiency, valid passports, and supporting documents.",
  },
  {
    question: "Do universities require IELTS or TOEFL?",
    answer:
      "Many universities require English proficiency tests such as IELTS, TOEFL, or PTE, though some institutions offer waivers under certain conditions.",
  },
  {
    question: "Can I work while studying abroad?",
    answer:
      "Most countries allow international students to work part-time during studies based on visa regulations and university policies.",
  },
  {
    question: "Do you help with accommodation abroad?",
    answer:
      "Yes. We guide students with accommodation options including university housing and private student residences.",
  },
  {
    question: "How much does studying abroad typically cost?",
    answer:
      "Costs vary depending on the country, university, and course. Expenses may include tuition fees, accommodation, insurance, travel, and living expenses.",
  },
  {
    question: "Can parents accompany students abroad?",
    answer:
      "Certain countries provide dependent or guardian visa options depending on the student's age and program type.",
  },
  {
    question: "How long does the admission process take?",
    answer:
      "Admission timelines vary by university and country, but the process can take anywhere from a few weeks to several months.",
  },
  {
    question: "Do you assist after students reach the destination country?",
    answer:
      "Yes. We provide pre-departure guidance and continued support to help students settle comfortably abroad.",
  },
  {
    question: "Can I transfer universities after going abroad?",
    answer:
      "Some universities and countries allow student transfers depending on academic performance and institutional policies.",
  },
  {
    question: "What documents are required for university applications?",
    answer:
      "Typically documents include academic transcripts, passport copies, SOP, LORs, English proficiency scores, and other course-specific requirements.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

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
                Frequently Asked Questions
              </p>

              <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Answers for your
                <span className="block bg-gradient-to-r from-[#F5A623] via-[#FFD27A] to-[#F5A623] bg-clip-text text-transparent">
                  global education journey.
                </span>
              </h1>

              <p className="mt-8 max-w-3xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg md:text-xl md:leading-9">
                Explore answers to common questions about admissions, visas,
                scholarships, universities, accommodation, and studying abroad.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative bg-[#F7F9FC] px-5 py-14 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-20">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            {faqCategories.map((category, index) => (
              <Reveal
                key={category}
                delay={index * 0.05}
              >
                <motion.button
                  whileHover={{ y: -3 }}
                  className="rounded-full border border-black/10 bg-white/85 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#B45309] shadow-[0_10px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {category}
                </motion.button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom max-w-5xl">
          <Reveal>
            <div className="mb-14">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Student Questions
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Everything students usually ask us.
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Reveal
                key={faq.question}
                delay={index * 0.05}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="overflow-hidden rounded-[2rem] border border-black/10 bg-white/85 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-8 py-7 text-left"
                  >
                    <h3 className="text-xl font-black text-[#07182B] dark:text-white">
                      {faq.question}
                    </h3>

                    <span className="text-2xl text-[#B45309]">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-8 pb-8">
                          <p className="leading-8 text-black/60 dark:text-white/60">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT SECTION */}
      <section className="relative bg-[#F7F9FC] px-5 py-20 text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white md:px-6 md:py-28">
        <div className="container-custom grid gap-12 lg:grid-cols-2 lg:items-center md:gap-20">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#B45309] sm:text-sm">
                Student Support
              </p>

              <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                Personalized guidance for every student.
              </h2>

              <p className="mt-8 text-base leading-8 text-black/60 dark:text-white/60 sm:text-lg">
                Our advisors support students through course selection,
                applications, scholarships, visas, accommodation, and
                pre-departure preparation.
              </p>

              <div className="mt-10 space-y-6">
                {[
                  "One-on-one counselling sessions",
                  "Visa & documentation support",
                  "University application guidance",
                  "Scholarship assistance",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5A623]/10 text-[#B45309]">
                      ✓
                    </div>

                    <p className="text-lg text-black/70 dark:text-white/70">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-[2.5rem] border border-black/10 bg-white/85 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] md:p-10"
            >
              <h3 className="text-3xl font-black text-[#07182B] dark:text-white">
                Need personalized guidance?
              </h3>

              <p className="mt-5 leading-8 text-black/60 dark:text-white/60">
                Speak directly with our expert education advisors and receive
                personalized recommendations tailored to your academic goals.
              </p>

              <div className="mt-10 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#F5A623] px-8 py-4 text-center font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                >
                  Contact Our Team
                </Link>

                <Link
                  href="/services"
                  className="rounded-full border border-black/10 bg-[#F8F6F2] px-8 py-4 text-center font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
                >
                  Explore Services
                </Link>
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
              className="relative overflow-hidden rounded-[3rem] border border-black/10 bg-gradient-to-br from-[#F5A623]/10 via-white/80 to-cyan-100/70 p-10 shadow-[0_25px_100px_rgba(0,0,0,0.12)] backdrop-blur-3xl transition-all duration-500 dark:border-white/10 dark:from-[#F5A623]/15 dark:via-white/[0.03] dark:to-[#7C3AED]/10 dark:shadow-[0_25px_100px_rgba(0,0,0,0.4)] md:p-16"
            >
              <div className="absolute inset-0 opacity-[0.04]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, currentColor 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Still Have Questions?
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] text-[#07182B] dark:text-white sm:text-5xl md:text-6xl">
                  Let’s help you plan your future abroad.
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65 sm:text-lg">
                  Connect with our expert advisors and receive personalized
                  support for your global education journey.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact"
                    className="w-fit rounded-full bg-[#F5A623] px-8 py-4 font-bold text-[#111111] transition hover:bg-[#FFD27A]"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/courses"
                    className="w-fit rounded-full border border-black/10 bg-white/70 px-8 py-4 font-semibold text-[#07182B] transition hover:bg-[#07182B] hover:text-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-[#111111]"
                  >
                    Explore Courses
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