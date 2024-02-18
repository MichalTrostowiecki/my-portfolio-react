import { Button } from 'flowbite-react';
import PropTypes from 'prop-types'


const Project = ( { project } ) => {

    return (
        <div className='relative h-full'>
            <img className="object-fit object-scale-down h-full w-full" src={project.screenshot} alt="..." />
            <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center sm:flex-nowrap sm:flex-row sm:space-x-5'>
                <a href={project.github} className='mb-5 mx-1'>
                    <Button pill color='dark' >GitHub</Button>  
                </a>
                <a href={project.demo} className='mb-5 mx-1'>
                    <Button pill color='dark'>Demo</Button>
                </a>
                
            </div>
        </div>
    )
}


// Props validation
Project.propTypes = {
    project: PropTypes.shape({
        screenshot: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
    }).isRequired,
};


export default Project;


