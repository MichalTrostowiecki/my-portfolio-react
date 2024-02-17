import { Button } from 'flowbite-react';


const Project = ( { project } ) => {

    return (
        <div className='relative h-full'>
            <img className="object-cover h-full w-full" src={project.screenshot} alt="..." />
            <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-wrap items-center justify-center sm:flex-nowrap sm:flex-row sm:space-x-5'>
                <a href={project.github} className='mb-5'>
                    <Button pill color='light'>GitHub</Button>  
                </a>
                <a href={project.demo} className='mb-5'>
                    <Button pill color='light'>Demo</Button>
                </a>
            </div>
        </div>
    )
}

export default Project;