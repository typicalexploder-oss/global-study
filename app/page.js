import Hero from "@/components/Hero";
import Countries from "@/components/Countries";
import CountryDetails from "@/components/CountryDetails";
import WhyChooseUs from "@/components/WhyChooseUs";
import StudentJourney from "@/components/StudentJourney";
import ContactCTA from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Countries />
      <WhyChooseUs />
      <StudentJourney />
      <CountryDetails />
      <ContactCTA />
    </main>
  );
}