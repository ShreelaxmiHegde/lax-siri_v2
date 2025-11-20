"use client";   
import { useState } from "react"

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-[#ffffff0d] backdrop-blur-sm py-3 shadow-xl/5 shadow-sky-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
            <div className="tracking-tight font-bold text-3xl bg-linear-to-r from-[#0379fc] to-[#22ffd7] bg-clip-text font-extrabold text-transparent">
                Shreelaxmi Hegde
            </div>
            <div className="md:hidden hamburger-menu" onClick={handleToggle}>
                <i className="fa-solid fa-bars"></i>
            </div>

            {/* Desktop view */}
            <div className="hidden md:flex gap-6 text-sm nav-items">
                <a href="#about" className="font-bold text-lg">About</a>
                <a href="#skills" className="font-bold text-lg">Skills</a>
                <a href="#works" className="font-bold text-lg">Works</a>
                <a href="#experience" className="font-bold text-lg">Experience</a>
                <a href="#contact" className="font-bold text-lg">Contact</a>
            </div>

            {/* Mobile view */}
            {toggle && 
            (<div className="flex flex-col gap-4 text-sm absolute right-0 top-20 z-50 bg-[#ffffff0d] backdrop-blur-sm p-6 shadow-xl/5 shadow-sky-100">
                <a href="#about" className="font-bold text-lg">About</a>
                <a href="#skills" className="font-bold text-lg">Skills</a>
                <a href="#works" className="font-bold text-lg">Works</a>
                <a href="#experience" className="font-bold text-lg">Experience</a>
                <a href="#contact" className="font-bold text-lg">Contact</a>
            </div>)}
        </div>
        </nav>
    )
}