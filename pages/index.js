import Link from "next/link";
import Hero from "../components/home/hero";
import Bio from "../components/home/bio";
import Navbar from "../components/home/navbar";
import Photo from "../components/home/photo";
import Skillsgrid from "../components/home/skillsgrid";

export default function Homepage() {
  return (
    <div className="w-full py-10 bg-zinc-800 pt-20">
     <Navbar />
      <Hero
        name="Hi, I'm Charlotte..."
      />
      <Photo />
      <Skillsgrid />
      

       
          
     

    </div>
  )
}