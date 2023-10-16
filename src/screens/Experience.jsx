import React from 'react';
import profile from '../profile.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
    return (
        <div className='dark:text-white text-slate-900 flex flex-col items-center md:items-end  my-20 sm:mt-10 md:mt-40 lg:mt-60 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12' id='experience'>
            <h2 className='dark:text-white text-sky-900 font-medium text-2xl font-high-l lg:ml-[33.3%] mx-auto md:self-start lg:text-3xl dark:opacity-70'>
                <FontAwesomeIcon icon={faBriefcase} className='mr-3' />
                <span className='relative hor-bar'>
                    Experience
                </span>
            </h2>

            {/* <section className='flex flex-col lg:flex-row md:gap-8 lg:gap-12 justify-center items-center lg:items-start mt-8 a sm:mt-10 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-11/12'> */}

            <section className='font-sans font-[240] lg:w-2/3 dark:opacity-80 mt-5 text-base lg:text-[1.1rem] tracking-normal'>
                {profile['experience'].map(organisation =>
                    <div>
                        <h3 className='text-xl md:text-2xl font-normal text-sky-500'><a href={organisation.url} target='_blank' rel='noreferrer'>{organisation['name']}</a></h3>
                        <h4 className='text-base md:text-xl text-slate-950 dark:text-white font-normal'>{organisation['role']}</h4>
                        <div className="font-normal mb-3 text-slate-950 dark:text-white">
                            <span>{organisation['start']}</span>
                            <span> - </span>
                            <span>{organisation['end']}</span>
                        </div>
                        {organisation['paras'].map(para => <p className='font-high-l mt-3 dark:font-[280] font-[399] leading-6'>{para}</p>)}
                    </div>
                )}

            </section>

            {/* </section> */}

        </div>
    )
}
