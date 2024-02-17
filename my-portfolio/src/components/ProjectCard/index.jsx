
const ProjectCard = ( { project } ) => {

    console.log(project)


    return (
        <div className="flex flex-col h-full m-2 max-w-sm border hover:border-1 hover:border-cyan-600 rounded-lg shadow bg-neutral-900 border-black hover:bg-black">
            <a href="#">
                <img className="rounded-t-lg p-5" src={project.screenshot} alt="" />
            </a>
            <div className="flex flex-col h-full p-5 border-black m-3 bg-zinc-800  group-hover:bg-black">
                <div className="flex-grow">
                    <a href="#">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                </div>
                <a href="#" className="group h-full relative overflow-hidden mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-600 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                    <span className="absolute inline-flex items-center transition-transform duration-500 ease-in-out transform group-hover:translate-x-12">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </span>
                </a>
            </div>
        </div>

    )
}

export default ProjectCard;