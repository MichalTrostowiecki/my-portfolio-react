import projects from '../../data/projects.json';
import ProjectCard from '../ProjectCard';



const ProjectList = () => {

    const displayProjects = (projects) => {
        return projects.map(project => {
            return <ProjectCard key={project.id} project={project}/>
        })
    }

    return (
        <div className='mt-64 mb-32'>
        <div>
            <h2 className='underline decoration-sky-500 text-center mx-auto p-5 w-3/4 text-3xl font-semibold
                leading-relaxed text-white underline-offset-8'>
                Other Projects
            </h2>
        </div>
        <div className='max-w-7xl w-full sm:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4  items-stretch justify-items-center mx-auto'>
            {displayProjects(projects)}
        </div>
        </div>
    )
}

export default ProjectList;