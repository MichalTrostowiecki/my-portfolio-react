
const FooterComponent = () => {
    return (
        <footer className=" rounded-lg shadow bg-black p-2">
            <div>
                <p className="text-center text-gray-500 text-sm">
                Questions? Email me at
                    <a href="mailto:m.trostowiecki@gmail.com" className="ml-2 text-blue-500 hover:text-blue-700">m.trostowiecki@gmail.com</a>
                </p>
            </div>
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <ul className="flex justify-evenly flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/about" className="mr-3 text-gray-400 hover:text-gray-900 dark:hover:text-white">About</a>
                    </li>
                    <li>
                        <a href="/contact" className="mr-3 text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</a>
                    </li>
                    <li>
                        <a href="/about" className="mr-3 text-gray-400 hover:text-gray-900 dark:hover:text-white">CV</a>
                    </li>
                    <li>
                        <a href="https://github.com/MichalTrostowiecki" className="text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="GitHub">
                            <svg className="mr-3 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/michal-trostowiecki" className="items-center text-gray-400 hover:text-gray-900 dark:hover:text-white" aria-label="Linked">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-3 h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                            </svg>
                        </a>
                    </li>
                    
                </ul>
                <span className="mt-3 flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
                    <a href="https://flowbite.com/" className="ml-1 hover:underline">
                        Michal Trostowiecki™
                    </a>
                </span>
            </div>
        </footer>

    )
    
}

export default FooterComponent;