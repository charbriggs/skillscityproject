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
        name="Hi, I'm Charlotte..."
      />
      <Photo />
      <Bio />

        <div className="w-full flex flex-col bg-zinc-800 pl-10">

          <h3 className="font-medium text-2xl bg-zinc-800 pt-4 text-teal-500">
          Topics Covered During Bootcamp:
          </h3>
          </div>
          <div>
            <ul className="list-disk bg-zinc-800 bg-zinc-800 pl-10 pt-4 pb-10 text-neutral-100">
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Next.js</li>
              <li>State hook</li>
              <li>Effect hook</li>
              <li>Node.js</li>
              <li>Git</li>
              <li>React components</li>
              <li>Cloud Computing</li>
              <li>SQL</li>
            </ul>
        </div>
          
     

    </div>
  )
}