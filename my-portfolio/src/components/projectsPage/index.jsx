import Projects from '../projectsDisplay'
import Navbar from '../navbar'
import Footer from '../footer';
import ProjectList from '../ProjectsList';

// This component is a project page to display when user clicks on tab "projects"
const ProjectsPage = () => {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '80px' }}> {/* Adjusted padding-top */}
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