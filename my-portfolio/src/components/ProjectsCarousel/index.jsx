import projects from '../../data/projects.json';
import { Carousel, Flowbite } from 'flowbite-react';
import Project from '../singleProject';






const ProjectCarousel = () => {




    const customTheme = {
        carousel: {
            indicators: {
                active: 'bg-white dark:bg-white',
                base: 'h-3 w-3 rounded-full',
                wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
            },
        },
    };



    return (
        <Flowbite theme={{ theme: customTheme }}>
        <div className='h-[40vh] w-full mx-auto p-3'>    
            <Carousel className='carousel' pauseOnHover>
                {projects.map((project) => (
                    <Project key={project.id} project={project} />
                ))}
            </Carousel>
        </div>
        </Flowbite>
    )
}

export default ProjectCarousel;