import ProjectList from "../ProjectsList";
import AboutMe from "../aboutMe";
import FooterComponent from "../footer";
import Header from "../header";
import Hero from "../heroSection"
import Projects from "../projectsPage";



const HomePage = () => {
    return (
        <div>
            
            <Header />
            <Hero />
            <AboutMe />
            <Projects/>
            <ProjectList />
            <FooterComponent />
        </div>
    )
}

export default HomePage;