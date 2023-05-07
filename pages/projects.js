import Navbar from "../components/work/navbar";
import Footer from "../components/work/footer";
import Work from "../components/work/hero";

export default function Projectspage () {
    return (
        <div className="bg-background1 bg-cover font-akira scroll-smooth">
            <div className="">
            <Navbar />
            <Work />
            <Footer />
        </div>
        </div>
    )
}