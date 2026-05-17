import Hero from "@/components/Hero";
import Countries from "@/components/Countries";
import CountryDetails from "@/components/CountryDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudentJourney from "@/components/StudentJourney";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <main className="bg-[#F7F9FC] text-[#07182B] transition-colors duration-500 dark:bg-[#06121F] dark:text-white">
      <Hero />
      <Countries />
      <WhyChooseUs />
      <StudentJourney />
      <CountryDetails />
      <ContactCTA />
    </main>
  );
}
