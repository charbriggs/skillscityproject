import Link from "next/link"
export default function Navbar() {
    return (
      
      <div className="w-screen">
      <div className="
         
        px-10
        relative
        items-center
        justify-between
        py-2
        navbar navbar-expand-lg navbar-light
        -mt-20
        ;
        ">
                <Link className="text-violet-300 pr-4 font-bold hover:text-violet-200" href="/index">Home</Link>
                <Link className="text-violet-300 pr-4 font-bold hover:text-violet-200" href="/about">About</Link>
                <Link className="text-violet-300 pr-4 font-bold hover:text-violet-200" href="/projects">Work</Link>
                <Link className="text-violet-300 pr-4 font-bold hover:text-violet-200" href="/contactpage">Contact</Link>
                
              </div>
              </div>
                  
    )
  }