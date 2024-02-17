
import projects from '../../data/projects.json'
import { Carousel } from 'flowbite-react'
import Project from '../singleProject'
import { Button } from 'flowbite-react'





const ProjectCarousel = () => {
    return (
        <div className='h-[50vh] w-1/2 mx-auto'>    
            <Carousel slide={false} pauseOnHover>
                {projects.map(project => (
                    <Project key={project.id} project={project} />
                ))}
            </Carousel>
        </div>
    )
}

       
   

export default ProjectCarousel;