
import Link from "next/link";
import Hero from "../components/home/hero";
import Navbar from "../components/home/navbar";
import Footer from "../components/home/footer";

export default function Homepage() {
  return (
    <div className="bg-background1 bg-cover font-akira scroll-smooth">
    <div className="w-full py-10 pt-20">
     <Navbar />
      <Hero
        name="Charlotte Briggs Alves"
      />
      <Footer />
    </div></div>
  )
}