import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import profile from '../profile.json';
import Tabs from '../components/UI/Tabs/Tabs.jsx';

export default function Projects() {
    return (
        <div className='flex flex-col items-center md:items-end  my-20 sm:mt-10 md:mt-40 lg:mt-60 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12' id='projects'>
            <h2 className='text-white font-medium text-2xl font-high-l lg:ml-[33.3%] mx-auto md:self-start lg:text-3xl opacity-70'>
                <FontAwesomeIcon icon={faDiagramProject} className='mr-3' />
                <span className='relative hor-bar'>
                    Projects
                </span>
            </h2>


            <section className='font-sans font-[240] lg:w-2/3 opacity-80 mt-5 text-white text-base lg:text-[1.1rem] tracking-tight'>

                <Tabs tabs={profile['projects'].map((project, idx) => ({ ...project, id: idx }))} />
            </section>
        </div>
    )
}
