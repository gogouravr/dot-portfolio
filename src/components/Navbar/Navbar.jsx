import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

export default function Navbar() {

    const resumeButtonClickHandler = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <nav className='flex justify-between container mx-auto mt-4 items-center'>
            <section className='text-white text-3xl font-prime font-semibold opacity-90 tracking-wide'>
                Portfolio<span className="text-sky-500">.</span>
            </section>
            <ul className='text-white flex gap-10 items-center font-normal'>
                <li className='list-none font-thin cursor-pointer hover:text-sky-400 ease-in-out duration-100 opacity-85'>About</li>
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
