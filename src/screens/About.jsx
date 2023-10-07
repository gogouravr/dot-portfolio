import React from 'react';
import profile from '../profile.json'

export default function About() {
    return (
        <div className='my-20 a sm:mt-10 lg:mt-60 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12' id='about'>
            <h2 className='text-white text-2xl font-high-l opacity-80 self-start lg:text-4xl'>
                About Me
            </h2>
            <section className='flex flex-col lg:flex-row lg:gap-10 justify-center items-center mt-10 a sm:mt-10 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-11/12'>

                <figure className='mt-10 w-3/4 max-w-[300px] lg:w-1/3 lg:max-w-none image-container relative'>
                    <img className='border-0 opacity-80 bg-sky-100 rounded-full drop-shadow-2xl bg-sky-500' src="/gourav-raj-photo.png" alt={profile['first-name'] + ' ' + profile['last-name']} />
                </figure>

                <p className='font-sans font-extralight lg:w-2/3 opacity-80 mt-5 text-white text-lg lg:text-xl'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto voluptates veritatis porro labore rerum provident, reiciendis vel cum, laboriosam cumque eveniet laudantium repudiandae animi, unde assumenda ea. Vitae, aliquid. Eligendi.
                    Corrupti sequi officia quam ullam blanditiis aut nemo dolor amet ex quod. Magni nihil magnam sit rem minima ullam in ipsam atque eveniet. Rem, aperiam sunt quod fugit obcaecati quisquam?
                    Quisquam necessitatibus, sapiente tempora a iusto hic optio ipsa commodi non, iste sit perferendis minima totam! Minus quisquam, a commodi facere error non maxime possimus id similique, ipsum ipsam nesciunt.
                </p>

            </section>
        </div>
    )
}
