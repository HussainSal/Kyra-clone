import { Inter } from "next/font/google";
import Footer from "@/templates/Footer/Footer";
import Signup from "@/templates/Signup/Signup";
import Project from "@/templates/Project/Project";
import Creator from "@/templates/CreatorPlatform/Creator";
import CompanyCustomers from "@/templates/CompanyCustomers/CompanyCustomers";
import HomePage from "@/templates/HomePage/HomePage";
import Navbar from "@/templates/Navbar/Navbar";

export default function Home() {
  const getSection = (id: string) => {
    console.log("IDCHECK", id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/*Navbar */}
      <Navbar getSection={getSection} />

       {/*Main Page */}
      <HomePage />

      {/*Company customers page i.e where brands are displayed */}
      <CompanyCustomers />

      {/*Projects page i.e where different project will be displayed eg:- Ebay,linkedin etc */}
      <Project />

      {/*New creator platform */}
      <Creator />

      {/* Make and impact page*/}
      <Signup />

      {/* Footer */}
      <Footer />
    </div>
  );
}
