import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

export default function Navbar() {

    const resumeButtonClickHandler = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <nav className='flex container w-5/6 mx-auto mt-5 items-center justify-center md:justify-between'>
            <h1 className='text-white font-prime font-semibold opacity-90 tracking-wide text-2xl sm:text-3xl'>
                gouravraj<span className="text-sky-500">.</span>in
            </h1>
            <ul className='text-white items-center font-normal hidden md:gap-2 lg:gap-4 xl:gap-6 md:flex'>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85 ml-10 lg:ml-0'>
                    <a href='#about' className='md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        About
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>
                    <a href='#experience' className='md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Experience
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>
                    <a href='#projects' className='md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Projects
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>
                    <a href='#contact' className='md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Contact
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>
                    <PrimaryButton clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
                </li>
            </ul>
        </nav>
    )
}
