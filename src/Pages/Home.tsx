import React from 'react';
import ProfilePicture from '../Assets/Imgs/pro-pic.jpg';

const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-white px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">
                {/* Image Section */}
                <div className="relative w-full h-auto mb-12 sm:mr-52 sm:w-96 sm:h-96">
                    <div className="absolute w-56 h-56 bg-custom-bg-black border-4 border-dark-red sm:w-full sm:h-full"></div>
                    <div className="relative top-5 left-5 w-56 h-56 bg-custom-bg-black border-4 border-dark-red flex items-center justify-center sm:w-full sm:h-full">
                        <img className='' src={ProfilePicture} alt="Rakesh-profile-picture" />
                    </div>
                </div>
                {/* Text Section */}
                <div className="flex flex-col items-center text-center sm:text-left sm:items-start">
                    <h1 className="text-5xl sm:text-8xl font-bold text-highlight-red">Rakesh</h1>
                    <p className="text-lg sm:text-xl italic text-dark-red mb-12 sm:mb-8 whitespace-nowrap overflow-hidden border-r-4 border-dark-red animate-typing">
                        A Full Stack Developer...
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-16 py-2 border-2 border-dark-red text-dark-red rounded-md hover:bg-dark-red hover:text-custom-bg-black transition duration-300">HIRE ME</button>
                        <button className="px-16 py-2 border-2 border-dark-red text-dark-red rounded-md hover:bg-dark-red hover:text-custom-bg-black transition duration-300">RESUME</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home