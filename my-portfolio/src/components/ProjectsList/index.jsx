import projects from '../../data/projects.json';
import ProjectCard from '../ProjectCard';



const ProjectList = () => {

    const displayProjects = (projects) => {
        return projects.map(project => {
            return <ProjectCard key={project.id} project={project}/>
        })
    }

    return (
        <div className='max-w-7xl w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  items-stretch justify-items-center mx-auto'>
            {displayProjects(projects)}
        </div>
    )
}

export default ProjectList;