import React from "react";
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS..</p>
                <h1 className="md:text-7xl ms:text-6xl ms:text-4xl font-bold md:py-6">Grow With Data</h1>
                <div className="text-center flex justify-center">
                    <p className="md:text-2xl sm:text:4xl text:xl font-bold">Fast, Flexible, Financing For </p>
                    <Typed
                        className="md:text-5xl sm:text:4xl text:xl font-bold pl-2"
                        strings={["Muhammad Aflah"]} typeSpeed={120} backSpeed={100} loop />
                </div>
                <p className="md:text-2xl text-xl mt-4 font-bold text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                <button className="mt-4 md:text-2xl font-bold bg-[#00df9a] text-black w-[200px] rounded my-6 mx-auto py-2 hover:bg-black hover:text-white hover:ring hover:ring-[#00df9a]">Get Started</button>
            </div>
        </div>
    )
}

export default Hero;