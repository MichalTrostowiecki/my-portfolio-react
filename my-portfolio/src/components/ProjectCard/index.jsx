import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// This component represents an individual project card in the project list
const ProjectCard = ({ project }) => {
    return (
        <div className="w-3/4 sm:w-full flex flex-col h-full m-2 max-w-sm border hover:border-1 hover:border-cyan-600 rounded-lg shadow bg-neutral-900 border-black hover:bg-black group">
            <Link to={`/projects/${project.id}`}>
                <img className="brightness-75 group-hover:brightness-100 w-full h-64 object-contain md:object-cover rounded-3xl p-3" src={project.screenshot} alt={`${project.name} screenshot`} />
            </Link>
            <div className="flex flex-col h-full p-5 rounded-xl border-black m-3 bg-zinc-800  group-hover:bg-black">
                <div className="flex-grow">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{project.name}</h5>
                </div>
                <Link to={`/projects/${project.id}`} className="group h-8 relative overflow-hidden mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    <span className="font-semibold absolute inline-flex items-center transition-transform duration-500 ease-in-out transform group-hover:translate-x-12">
                        View Details
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    );
};

// Props validation
ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.number.isRequired,
        screenshot: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        demo: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired
    }).isRequired,
};
export default ProjectCard;