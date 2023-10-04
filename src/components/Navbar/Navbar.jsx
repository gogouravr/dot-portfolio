import React from 'react'
import PrimaryButton from '../UI/PrimaryButton'

export default function Navbar() {
    return (
        <nav className='flex justify-between container mx-auto mt-3 items-center'>
            <section className='text-white text-3xl font-prime font-semibold opacity-90 tracking-wide'>
                Portfolio<span className="text-sky-500">.</span>
            </section>
            <section className='text-white flex gap-10 items-center font-high-l'>
                <li className='list-none cursor-pointer hover:text-sky-500 ease-in-out duration-100 opacity-85'>About</li>
                <li className='list-none cursor-pointer hover:text-sky-500 ease-in-out duration-100 opacity-85'>Experience</li>
                <li className='list-none cursor-pointer hover:text-sky-500 ease-in-out duration-100 opacity-85'>Projects</li>
                <li className='list-none cursor-pointer hover:text-sky-500 ease-in-out duration-100 opacity-85'>Contact</li>
                <li className='list-none cursor-pointer hover:text-sky-500 ease-in-out duration-100 opacity-85'><PrimaryButton>Say Hello</PrimaryButton></li>
            </section>
        </nav>
    )
}
