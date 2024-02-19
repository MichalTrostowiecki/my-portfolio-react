import ProjectList from "../ProjectsList";
import AboutMe from "../aboutPage/aboutMe";
import FooterComponent from "../footer";
import Header from "../header";
import Hero from "../heroSection"
import Projects from "../projectsDisplay";
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