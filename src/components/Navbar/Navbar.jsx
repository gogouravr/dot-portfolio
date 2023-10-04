import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-around'>
            <section className='text-white'>
                Portfolio.
            </section>
            <section className='text-white flex'>
                <li className='list-none'>About</li>
                <li className='list-none'>Experience</li>
                <li className='list-none'>Projects</li>
                <li className='list-none'>Contact</li>
            </section>
        </nav>
    )
}
