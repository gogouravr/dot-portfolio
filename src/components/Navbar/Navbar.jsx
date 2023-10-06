import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

export default function Navbar() {

    const resumeButtonClickHandler = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <nav className='flex container w-5/6 mx-auto mt-5 items-center justify-center md:justify-between'>
            <section className='text-white font-prime font-semibold opacity-90 tracking-wide text-2xl sm:text-3xl'>
                gouravraj<span className="text-sky-500">.</span>in
            </section>
            <ul className='text-white items-center font-normal hidden md:gap-4 lg:gap-8 xl:gap-10 md:flex'>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85 ml-10 lg:ml-0'>About</li>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>Experience</li>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>Projects</li>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>Contact</li>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>
                    <PrimaryButton clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
                </li>
            </ul>
        </nav>
    )
}
