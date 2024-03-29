import { useState } from "react";



// Define Navbar component
function Navbar() {
    // Set state for burger menu
    const [burgerMenuActive, setMenuBurgerActive] = useState(false);
   
    // Handle click on burger menu on smaller screen sizes
    const handleBurgerMenu = () => {
        setMenuBurgerActive(!burgerMenuActive);
    }

    return (

        <nav className="w-full fixed bg-black border-b-4 border-cyan-400 z-10 -m-2 mx-auto">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-white"><span className="text-cyan-500">Michal</span> Trostowiecki</span>
            </a>
            <button data-collapse-toggle="navbar-dropdown" onClick={handleBurgerMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-cyan-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-cyan-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={burgerMenuActive ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black  dark:border-cyan-700">
                <li>
                    <a href="/" className="block py-2 px-3 text-white rounded hover:bg-cyan-600 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/projects" className="block py-2 px-3 text-white rounded hover:bg-cyan-600 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/about-me" className="block py-2 px-3 text-white rounded hover:bg-cyan-600 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1GGiUrTBKYwJvYmHirb__I0eWt7flAvyX/view?usp=sharing" className="block py-2 px-3 text-white rounded hover:bg-cyan-600 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        CV
                    </a>
                </li>
                <li>
                    <a href="/contact" className="block py-2 px-3 text-white rounded hover:bg-cyan-600 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">
                        Contact
                    </a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  );
}
export default Navbar;