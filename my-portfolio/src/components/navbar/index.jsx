import { useState } from "react";




function Navbar() {
    const [dropDownActive, setDropDownActive] = useState(false);
    const [burgerMenuActive, setMenuBurgerActive] = useState(false);

    // Handle click on drop down menu with projects
    const handleDropDown = () => {
        setDropDownActive(!dropDownActive);
    }
    // Handle click on burger menu on smaller screen sizes
    const handleBurgerMenu = () => {
        setMenuBurgerActive(!burgerMenuActive);
    }

    return (

        <nav className="w-full fixed bg-black border-b-4 border-cyan-400 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Michal Trostowiecki</span>
            </a>
            <button data-collapse-toggle="navbar-dropdown" onClick={handleBurgerMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-cyan-700 dark:focus:ring-cyan-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className={burgerMenuActive ? "w-full md:block md:w-auto" : "hidden w-full md:block md:w-auto"} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:black md:dark:black dark:border-cyan-700">
                <li>
                <a href="#" className="block py-2 px-3 text-white bg-cyan-600 rounded md:bg-transparent md:text-cyan-600 md:p-0 md:dark:text-cyan-500 dark:bg-cyan-500 md:dark:bg-transparent" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="dropdownNavbarLink" onClick={handleDropDown} data-dropdown-toggle="dropdownNavbar"
                            className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-cyan-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-cyan-700 md:dark:hover:bg-transparent"
                            >
                            Projects
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                    </button>
                    
                    <div id="dropdownNavbar" className={
                        dropDownActive ? 
                        "z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-cyan-700 dark:divide-cyan-600 absolute"
                        :
                        "z-10 font-normal hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-cyan-700 dark:divide-cyan-600 absolute"
                        }
                    >

                        <ul className="py-2 text-sm text-white-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                        <li>
                            <a href="#" className="text-white block px-4 py-2 hover:bg-cyan-100 dark:hover:bg-cyan-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" className="text-white block px-4 py-2 hover:bg-gray-100 dark:hover:bg-cyan-600 dark:hover:text-white">Earnings</a>
                        </li>
                        </ul>
                        
                    </div>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-700 md:p-0 dark:text-white md:dark:hover:text-cyan-500 dark:hover:bg-cyan-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
  );
}
export default Navbar;