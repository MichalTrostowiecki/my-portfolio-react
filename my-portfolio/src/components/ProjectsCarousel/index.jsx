import projects from '../../data/projects.json';
import { Carousel } from 'flowbite-react';
import Project from '../singleProject';






const ProjectCarousel = () => {

    return (
        <div className='h-[40vh] w-full mx-auto p-3'>
            <h2 className='underline decoration-sky-500 text-center mx-auto p-5 mb-10 w-3/4 text-3xl font-semibold
                leading-relaxed text-gray-900 dark:text-white underline-offset-8'>
                Check My Work
            </h2>
            <Carousel className='carousel' pauseOnHover>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </Carousel>   
        </div>
    )
}

export default ProjectCarousel;