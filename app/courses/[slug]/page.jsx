"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const courses = {
  mbbs: {
    title: "MBBS",
    category: "Medical Studies",
    duration: "5 - 6 Years",
    tuition: "$4,000 - $12,000 / year",
    salary: "$60,000 - $250,000+",
    intake: "September & February",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1800&auto=format&fit=crop",
    overview:
      "MBBS programs prepare students for careers in medicine, surgery, healthcare, and clinical sciences through practical training and academic excellence.",

    eligibility:
      "High school completion with Biology, Chemistry, and Physics. English proficiency may be required.",

    scholarships:
      "Merit scholarships, university grants, healthcare scholarships, and government-funded opportunities.",

    careers:
      "Doctor, Surgeon, Medical Researcher, Hospital Specialist, Public Health Expert, and Healthcare Consultant.",

    curriculum: [
      "Human Anatomy",
      "Physiology",
      "Pathology",
      "Surgery",
      "Clinical Training",
      "Medical Ethics",
    ],

    universities: [
      "Carol Davila University",
      "Tbilisi State Medical University",
      "University of Debrecen",
    ],

    faqs: [
      {
        q: "Is MBBS abroad recognized internationally?",
        a: "Many universities offer globally recognized medical degrees approved by international medical councils.",
      },
      {
        q: "Can students practice in other countries after graduation?",
        a: "Graduates may need to clear licensing exams depending on the country they wish to practice in.",
      },
    ],
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    category: "Technology & Innovation",
    duration: "3 - 4 Years",
    tuition: "$6,000 - $20,000 / year",
    salary: "$80,000 - $300,000+",
    intake: "January & August",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Artificial Intelligence programs focus on machine learning, automation, neural networks, robotics, and future technologies.",

    eligibility:
      "Strong mathematics and computer science background with English proficiency.",

    scholarships:
      "STEM scholarships, innovation grants, and research funding opportunities.",

    careers:
      "AI Engineer, Machine Learning Specialist, Data Scientist, Robotics Engineer, and AI Researcher.",

    curriculum: [
      "Machine Learning",
      "Deep Learning",
      "Neural Networks",
      "Data Science",
      "Robotics",
      "AI Ethics",
    ],

    universities: [
      "Technical University of Munich",
      "National University of Singapore",
      "MIT",
    ],

    faqs: [
      {
        q: "Is AI a good career choice?",
        a: "AI is one of the fastest-growing and highest-paying industries globally.",
      },
      {
        q: "Do AI students need coding experience?",
        a: "Basic programming knowledge is highly recommended before starting.",
      },
    ],
  },

  "business-management": {
    title: "Business Management",
    category: "Business & Leadership",
    duration: "3 - 4 Years",
    tuition: "$5,000 - $18,000 / year",
    salary: "$50,000 - $220,000+",
    intake: "January, May & September",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1800&auto=format&fit=crop",
    overview:
      "Business Management develops leadership, finance, marketing, operations, and entrepreneurial skills for global industries.",

    eligibility:
      "High school completion, English proficiency, and strong communication skills.",

    scholarships:
      "Business excellence scholarships, leadership grants, and MBA-focused funding programs.",

    careers:
      "Business Analyst, Entrepreneur, Marketing Manager, Financial Consultant, and Corporate Executive.",

    curriculum: [
      "Marketing",
      "Finance",
      "Leadership",
      "Operations",
      "Economics",
      "Business Strategy",
    ],

    universities: [
      "Harvard Business School",
      "National University of Singapore",
      "INSEAD",
    ],

    faqs: [
      {
        q: "Is business management in demand?",
        a: "Business graduates are highly valued across finance, consulting, startups, and global corporations.",
      },
      {
        q: "Can students specialize later?",
        a: "Yes, students can later specialize in finance, marketing, HR, entrepreneurship, and more.",
      },
    ],
  },
"online-mba": {
  title: "Online MBA",
  category: "Management",
  duration: "2 Years",
  tuition: "₹80,000 - ₹250,000",
  salary: "$50,000 - $180,000+",
  intake: "January, April & September",
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800&auto=format&fit=crop",
  overview:
    "Online MBA programs prepare students for leadership, business strategy, finance, and management careers.",

  eligibility:
    "Bachelor degree from a recognized university.",

  scholarships:
    "Merit scholarships and EMI options available.",

  careers:
    "Business Analyst, Marketing Manager, HR Manager, Entrepreneur, and Corporate Executive.",

  curriculum: [
    "Marketing",
    "Finance",
    "Leadership",
    "Business Analytics",
    "Operations",
  ],

  universities: [
    "JAIN Online",
    "Yenepoya Online",
  ],

  faqs: [
    {
      q: "Is Online MBA valid?",
      a: "Yes, UGC-approved online MBA programs are valid and recognized.",
    },
  ],
},

"online-bca": {
  title: "Online BCA",
  category: "Computer Applications",
  duration: "3 Years",
  tuition: "₹60,000 - ₹180,000",
  salary: "$40,000 - $140,000+",
  intake: "January & July",
  image:
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800&auto=format&fit=crop",
  overview:
    "Online BCA programs focus on software development, programming, databases, and IT foundations.",

  eligibility:
    "12th pass with basic computer knowledge preferred.",

  scholarships:
    "Affordable fee structure and scholarship opportunities available.",

  careers:
    "Software Developer, Web Developer, IT Support, and App Development.",

  curriculum: [
    "Programming",
    "Databases",
    "Web Development",
    "Networking",
    "Cloud Basics",
  ],

  universities: [
    "JAIN Online",
    "Yenepoya Online",
  ],

  faqs: [
    {
      q: "Can I get an IT job after Online BCA?",
      a: "Yes, Online BCA graduates can pursue various IT and software careers.",
    },
  ],
},



};

export default function CoursePage({ params }) {
  const resolvedParams = use(params);
  const course = courses[resolvedParams.slug];

  if (!course) {
    notFound();
  }

  return (
    <main className="relative overflow-hidden bg-[#0B0B0B] text-white">
      {/* GLOWS */}
      <div className="absolute left-0 top-40 h-[350px] w-[350px] rounded-full bg-[#7C3AED]/10 blur-3xl" />

      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-[#F5A623]/10 blur-3xl" />

      {/* GRID */}
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

      {/* HERO */}
      <section className="relative px-5 pb-16 pt-40 md:px-6 md:pb-24 md:pt-44">
        <div className="container-custom">
          {/* BACK */}
          <div className="mb-14">
            <Link
              href="/courses"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#111111]"
            >
              ← Back to Courses
            </Link>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <Reveal>
              <div>
                <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#F5A623] sm:text-sm">
                  {course.category}
                </p>

                <h1 className="max-w-5xl break-words text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl md:text-7xl lg:text-8xl">
                  {course.title}
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-9 text-white/65">
                  {course.overview}
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {course.curriculum.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* IMAGE */}
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="overflow-hidden rounded-[3rem] border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-[500px] w-full object-cover"
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INFO */}
      <section className="relative bg-[#F8F6F2] px-5 py-20 text-[#111111] md:px-6 md:py-28">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Duration", course.duration],
              ["Tuition Fees", course.tuition],
              ["Future Salary", course.salary],
              ["Intakes", course.intake],
            ].map(([title, value]) => (
              <Reveal key={title}>
                <div className="rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
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
              <div className="rounded-[3rem] border border-black/5 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Eligibility
                </p>

                <p className="mt-6 text-lg leading-9 text-black/70">
                  {course.eligibility}
                </p>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Scholarships
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70">
                    {course.scholarships}
                  </p>
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    Career Opportunities
                  </p>

                  <p className="mt-6 text-lg leading-9 text-black/70">
                    {course.careers}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT */}
            <Reveal delay={0.1}>
              <div className="rounded-[3rem] border border-black/5 bg-white p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                  Top Universities
                </p>

                <div className="mt-8 space-y-5">
                  {course.universities.map((uni) => (
                    <div
                      key={uni}
                      className="rounded-2xl border border-black/5 bg-[#F8F6F2] p-5"
                    >
                      <h3 className="text-xl font-bold">{uni}</h3>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#B45309]">
                    FAQs
                  </p>

                  <div className="mt-8 space-y-5">
                    {course.faqs.map((faq) => (
                      <div
                        key={faq.q}
                        className="rounded-2xl border border-black/5 bg-[#F8F6F2] p-5"
                      >
                        <h3 className="text-xl font-bold">{faq.q}</h3>

                        <p className="mt-4 leading-8 text-black/70">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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
              <div className="relative z-10 max-w-4xl">
                <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#F5A623] sm:text-sm">
                  Start Your Journey
                </p>

                <h2 className="text-4xl font-black leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl">
                  Ready to study {course.title} abroad?
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
                  Get personalized admission guidance, scholarship assistance,
                  visa support, and career counselling from our study abroad
                  experts.
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
                    className="w-fit rounded-full border border-white/15 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#111111]"
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