import Link from "next/link"
export default function Navbar({ name }) {
    return (
        <div className="
        container mx-auto
        relative
        items-center
        justify-between
        bg-teal-100
        py-8
        navbar navbar-expand-lg navbar-light
        -mt-20
        ;
        ">
                <Link className="text-teal-800 pr-4 font-bold" href="/bookspage">Books</Link>
                <Link className="text-teal-800 pr-4 font-bold" href="/contactpage">Contact</Link>
                <Link className="text-teal-800 pr-4 font-bold" href="/searchpage">Search</Link>
              </div>
    )
  }