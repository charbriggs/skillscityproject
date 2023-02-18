import Hero from "../components/home/hero";
import Bio from "../components/home/bio";


export default function Homepage() {
  return (
    <div className="w-full py-10 bg-teal-100">
      <Hero
        name="Charlotte"
      />
  
      <Bio />

    </div>
  )
}