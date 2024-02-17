import CarouselTest from "../CarouselTest";
import FooterComponent from "../footer";
import Header from "../header";
import Projects from "../projectsPage";



const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
           <Header />
           <Projects className="flex-grow" />
           <FooterComponent />
           
        </div>
    )
}

export default HomePage;