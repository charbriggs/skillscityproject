import Link from "next/link"
export default function Navbar({ name }) {
    return (
      
      <div className="w-screen">
      <div className="
         
        px-10
        relative
        items-center
        justify-between
        bg-zinc-800
        py-2
        navbar navbar-expand-lg navbar-light
        -mt-20
        ;
        ">
                <Link className="text-teal-400 pr-4 font-bold" href="/index">Home</Link>
                <Link className="text-teal-400 pr-4 font-bold" href="/bookspage">About</Link>
                <Link className="text-teal-400 pr-4 font-bold" href="/projects">Work</Link>
                <Link className="text-teal-400 pr-4 font-bold" href="/contactpage">Contact</Link>
                
              </div>
              </div>
                  
    )
  }