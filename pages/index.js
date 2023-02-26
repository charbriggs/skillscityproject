import Link from "next/link";
import Hero from "../components/home/hero";
import Bio from "../components/home/bio";
import Navbar from "../components/home/navbar";
import Photo from "../components/home/photo";

export default function Homepage() {
  return (
    <div className="w-full py-10 bg-teal-100 pt-20">
     <Navbar />
      <Hero
        name="Hi, I'm Charlotte"
      />
      <Photo />
      <Bio />

    </div>
  )
}