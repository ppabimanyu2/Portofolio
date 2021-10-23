import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
    const links = [
        { id: 1, name: "About Me", to: "home" },
        { id: 2, name: "Portfolio", to: "portfolio" },
        { id: 3, name: "Lets Talk", to: "contact" }
    ]
    const navLinks = links.map(link => {
        return (
            <li key={link.id} className={`cursor-pointer hover:font-semibold hover:border-b-2 border-gray-900`} >
                <Link to={link.to} spy={true} smooth={true} offset={-70} duration={500}>{link.name}</Link>
            </li >
        );
    });
    return (
        <>
            <nav className="flex justify-between items-center pt-4 fixed top-0 bg-transparent w-full container z-50">
                <div>
                    <svg width="25" height="32" viewBox="0 0 25 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="17.6431" width="7.35664" height="31.5722" fill="white" />
                        <circle cx="7.57734" cy="24.2922" r="7.57734" fill="white" />
                    </svg>
                </div>
                <ul className="bg-white shadow-lg p-4 rounded-lg flex justify-around w-96 h-16 items-center">
                    {navLinks}
                </ul>
            </nav>
        </>
    )
}
