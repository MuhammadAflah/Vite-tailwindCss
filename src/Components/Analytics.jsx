import React from "react"
import Laptop from "../assets/laptop.jpg"

const Analytics = () => {
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">Data Analytics Dashboard</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics</h1>
                    <p className="py-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                <button className="mt-4 md:text-2xl font-bold bg-black text-[#00df9a] w-[200px] rounded my-6 mx-auto py-3 md:mx-0  hover:bg-white hover:text-[#00df9a] hover:ring hover:ring-black">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics