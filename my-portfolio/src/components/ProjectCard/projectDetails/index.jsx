import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../../data/projects.json';
import { Button } from 'flowbite-react';
import Navbar from '../../navbar';
import FooterComponent from '../../footer';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id == projectId);
  

  const technologies = () => {
    const techList = project.technologies[0].split(',');
    return techList.map((tech, index) => {
      return <li className='m-1 flex-wrap text-sky-400/100' key={index}>{tech.trim()}</li>;
    });
  };

  return project ? (
    
    <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-4 bg-black mt-14"> 
            <div className="text-center"> 
                <h1>{project.name}</h1>
            </div>
            <div className="flex flex-col items-center justify-center"> 
                <img className='mb-4' src={project.screenshot} alt={`${project.name} screenshot`} style={{ maxWidth: '100%', height: 'auto' }}></img> 
                <div className="space-y-6">
                    <div className="text-base leading-relaxed text-white/65 dark:white">
                        <h2 className='text-white text-lg mb-1 underline decoration-sky-500 underline-offset-4'>
                            Description:
                        </h2>
                        {project.description}
                    </div>
                    <h2 className='text-white text-lg underline underline-offset-4 decoration-sky-500'>
                        Technologies:
                    </h2>
                    <ul className="flex flex-wrap justify-center text-base leading-relaxed"> 
                        {technologies()}
                    </ul>
                </div>
            </div>
            <div className="flex justify-center mt-4"> 
                <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    <Button className='m-2'>GitHub</Button>
                </a>
                <a href={project.demo} target='_blank' rel='noopener noreferrer'>
                    <Button className='m-2' color="gray">
                        Demo
                    </Button>
                </a>
            </div>
        </div>
        <FooterComponent />
    </div>
    
  ) : <div>Project not found</div>;
};

export default ProjectDetails;