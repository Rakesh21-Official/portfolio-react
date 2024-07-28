import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faLaptopCode, faBriefcase, faChartBar, faPhone } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faHome, faUser, faBriefcase, faLaptopCode, faChartBar, faPhone);

const FloatingNavbar: React.FC = () => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full py-2 px-4 flex items-center space-x-5 sm:space-x-8 bg-gray-800 text-white shadow-lg">
            <Link to={"/"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faHome} />
                </span>
            </Link>
            <Link to={"/about"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faUser} />
                </span>
            </Link>
            <Link to={"/skills"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faLaptopCode} />
                </span>
            </Link>
            <Link to={"/services"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faBriefcase} />
                </span>
            </Link>
            <Link to={"/projects"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faChartBar} />
                </span>
            </Link>
            <Link to={"/contact"} className="flex flex-col items-center text-gray-400 hover:text-white">
                <span className="text-base sm:text-lg hover:text-2xl ease-in-out duration-200">
                    <FontAwesomeIcon icon={faPhone} />
                </span>
            </Link>
        </div>
    );
};

export default FloatingNavbar;
