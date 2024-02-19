import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../../data/projects.json';
import { Button } from 'flowbite-react';
import Navbar from '../../navbar';
import FooterComponent from '../../footer';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id == projectId);
  console.log(projects)

  const technologies = () => {
    const techList = project.technologies[0].split(',');
    return techList.map((tech, index) => {
      return <li className='m-1 flex-wrap text-sky-400/100' key={index}>{tech.trim()}</li>;
    });
  };

  return project ? (
    <div className='min-h-screen flex flex-col'>
        <Navbar />
        <div className="p-4 bg-black modal-read-more flex-grow mt-14">
            <div className="modal-header">
                <h1>{project.name}</h1>
            </div>
            <div className="bg-black">
                <img src={project.screenshot} alt={`${project.name} screenshot`}></img>
                <div className="space-y-6">
                    <div className="mt-2 text-base leading-relaxed text-white/65 dark:white">
                        <h2 className='text-white text-lg mb-1 underline decoration-sky-500 underline-offset-4'>
                            Description:
                        </h2>
                        {project.description}
                    </div>
                    <h2 className='text-white text-lg underline underline-offset-4 decoration-sky-500'>
                        Technologies:
                    </h2>
                    <ul className="flex text-base leading-relaxed">
                        {technologies()}
                    </ul>
                </div>
            </div>
            <div className="modal-footer flex ">
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