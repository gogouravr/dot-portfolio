import React from 'react';
import SocialMediaSection from './SocialMediaSection.jsx';
import profile from '../profile.json'
import PrimaryButton from './UI/PrimaryButton.jsx';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {
    // If the screen width is less than 800px, considering it as mobile
    const isMobileScreen = window.innerWidth < 800;
    console.log(isMobileScreen);

    return (
        <section className="flex flex-col justify-center mt-8 sm:mt-10 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
            <div className="text-sky-600 font-normal mt-20 mb-2 text-base sm:text-lg md:text-2xl">
                👋 Hi, my name is
            </div>

            <h2 className="text-slate-300 font-semibold font-high-l opacity-90 leading-15 text-4xl sm:text-5xl md:text-6xl">
                {profile['first-name'] + ' ' + profile['last-name'] + '.'}
            </h2>

            <p className="text-white font-high-l font-bold mt-3 text-4 opacity-50 leading-tight text-4xl sm:text-6xl md:text-6xl">
                {profile.intros[0]}
            </p>

            <p className='text-white font-thin font-sans opacity-83 w-3/4 my-6 lg:w-2/3 text-base sm:text-lg md:text-xl'>
                {profile.bio}
            </p>

            {profile.wip && !isMobileScreen &&
                <p className='text-white md:text-sm font-sans my-5 opacity-80'>
                    {profile['wip-text']} &nbsp;
                    <a className='cursor-pointer' href={profile['project-link']} target='blank'>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </p>
            }

            <SocialMediaSection iconSize={isMobileScreen ? '23px' : '30px'} />

            <div className="mt-5 sm:mt-8">
                <PrimaryButton>
                    <span className="text-sm md:text-base lg:text-lg">
                        Say back hello!
                    </span>
                </PrimaryButton>
            </div>
        </section >
    )
}
