import projects from '../../data/projects.json';
import { Carousel } from 'flowbite-react';
import Project from '../singleProject';






const ProjectCarousel = () => {

    return (
        <div className='h-[40vh] w-full mx-auto p-3'>    
            <Carousel className='carousel' pauseOnHover>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectCarousel;