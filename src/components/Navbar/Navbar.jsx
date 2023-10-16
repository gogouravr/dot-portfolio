import React from 'react';
import PrimaryButton from '../UI/PrimaryButton';

export default function Navbar() {

    const resumeButtonClickHandler = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <nav className='flex container w-5/6 mx-auto mt-5 items-center justify-center md:justify-between'>
            <h1 className='dark:text-white text-slate-900 font-prime font-semibold opacity-90 tracking-wide text-2xl sm:text-3xl'>
                gouravraj<span className="text-sky-500">.</span>in
            </h1>
            <ul className='dark:text-white text-slate-900 items-center font-normal hidden md:gap-2 lg:gap-4 xl:gap-6 md:flex opacity-85'>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 ml-10 lg:ml-0'>
                    <a href='#about' className='relative md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        About
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100'>
                    <a href='#experience' className='relative md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Experience
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100'>
                    <a href='#projects' className='relative md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Projects
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100'>
                    <a href='#contact' className='relative md:px-1 lg:px-3 md:py-2 rounded focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400'>
                        Contact
                    </a>
                </li>
                <li className='font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100'>
                    <PrimaryButton clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
                </li>
            </ul>
        </nav>
    )
}
