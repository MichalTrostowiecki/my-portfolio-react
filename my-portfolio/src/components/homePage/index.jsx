import ProjectList from "../ProjectsList";
import AboutMe from "../aboutMe";
import FooterComponent from "../footer";
import Header from "../header";
import Hero from "../heroSection"
import Projects from "../projectsPage";
import Skills from "../skills";



const HomePage = () => {
    return (
        <div>
            
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Projects/>
            <ProjectList />
            <FooterComponent />
        </div>
    )
}

export default HomePage;