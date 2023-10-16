import React from 'react';
import profile from '../profile.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';


export default function About() {
    return (
        <div className='dark:text-white text-slate-900 my-20 a sm:mt-10 md:mt-40 lg:mt-60 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12' id='about'>
            <h2 className='dark:text-white text-sky-700 font-medium text-2xl font-high-l text-center lg:text-start lg:self-start lg:ml-[33.3%] lg:text-3xl opacity-70'>
                <FontAwesomeIcon icon={faAddressCard} className='mr-3' />
                <span className='relative hor-bar'>
                    About Me
                </span>
            </h2>
            <section className='flex flex-col lg:flex-row mx-auto lg:justify-between items-center lg:items-start mt-8 sm:mt-5 w-fit'>

                <figure className='mt-10 w-3/4 max-w-[300px] lg:w-[25%] lg:max-w-none image-container relative rounded-full'>
                    <img className='border-3 shadow-[0_0_20px_20px_rgba(14,165,233,0.80)] border-sky-500 opacity-80 rounded-full drop-shadow-2xl dark:bg-slate-800 bg-sky-200' src="/gourav-raj-photo.png" alt={profile['first-name'] + ' ' + profile['last-name']} />
                </figure>

                <p className='font-high-l dark:font-[280] font-[400] leading-6 lg:w-2/3 opacity-80 mt-8 lg:mt-5 text-base lg:text-[1.1rem] tracking-normal flex flex-col gap-3'>
                    <p>{profile['about-text'][0]}</p>
                    <p>{profile['about-text'][1]}
                        <a href='https://www.bitmesra.ac.in/' target='_blank' rel="noreferrer" className="text-sky-500 dark:font-light font-[400]">
                            {profile['about-text'][2]}
                        </a>
                        {profile['about-text'][3]}
                    </p>
                    <p>{profile['about-text'][4]}
                        <a href='https://swym.it/' target='_blank' rel="noreferrer" className="text-sky-500 dark:font-light font-[400]">
                            {profile['about-text'][5]}
                        </a>
                        {profile['about-text'][6]}
                    </p>
                    <p>
                        {profile['about-text'][7]}
                    </p>

                    <p>
                        Here are some of the languages and frameworks I am skilled in:
                    </p>

                    <ul className='columns-2 list-square ml-5'>
                        {profile['skills'].map((item) => <li>{item}</li>)}
                    </ul>

                </p>

            </section>
        </div>
    )
}
