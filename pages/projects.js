import Navbar from "../components/work/navbar";
import Footer from "../components/work/footer";
import Headerone from "../components/work/hero";

export default function Projectspage () {
    return (
        <div className="bg-background1 bg-cover font-akira scroll-smooth">
            <div className="">
            <Navbar />
            <Headerone />
            <Footer />
        </div>
        </div>
    )
}