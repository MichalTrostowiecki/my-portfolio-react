import Projects from '../projectsDisplay'
import Navbar from '../navbar'
import Footer from '../footer';
import ProjectList from '../ProjectsList';


const ProjectsPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '80px', margin: '5px' }}> {/* Adjusted padding-top */}
                <Projects />
                <ProjectList />
            </div>
            <div style={{ marginTop: '200px' }}>
                <Footer />
            </div>
        </div>
    )
}

export default ProjectsPage;