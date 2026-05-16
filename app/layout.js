import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Global Study Abroad Consultants",
  description: "Premium study abroad consultancy platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#06121F] text-white">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}