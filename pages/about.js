import Navbar from "../components/about/navbar";
import About from "../components/about/biography";
import Hero from "../components/about/hero";
import Skillsgrid from "../components/about/skillsgrid";

export default function Aboutpage () {
    return (
        <div className="bg-background1 bg-cover font-akira scroll-smooth">
            <div className="w-full py-10 pt-20">
            <Navbar />
            <Hero
        name="About"
      />
      <Hero />
      <About />
      <Skillsgrid />
        </div> </div>
    )
}