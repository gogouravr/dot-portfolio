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
        <section className="flex flex-col justify-center sm:mt-10 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12">
            <div className="text-sky-600 font-normal mt-20 mb-2 text-base sm:text-lg md:text-2xl">
                👋 Hi, my name is
            </div>

            <div className="text-slate-300 font-semibold font-high-l opacity-90 leading-15 text-3xl sm:text-4xl md:text-6xl">
                {profile['first-name'] + ' ' + profile['last-name'] + '.'}
            </div>

            <div className="text-white font-high-l font-bold mt-3 text-4 opacity-50 leading-tight text-3xl sm:text-4xl md:text-6xl">
                {profile.intros[0]}
            </div>

            <article className='text-white font-thin font-sans opacity-83 w-3/4 my-6 text-base sm:text-lg md:text-xl'>
                {profile.bio}
            </article>

            {profile.wip && !isMobileScreen &&
                <span className='text-white md:text-sm font-sans my-5 opacity-80'>
                    {profile['wip-text']} &nbsp;
                    <span className='cursor-pointer' onClick={() => window.open(profile['project-link'], '_target')}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                </span>
            }

            <SocialMediaSection iconSize={isMobileScreen ? '23px' : '30px'} />

            <div className="mt-5 sm:mt-8">
                <PrimaryButton>
                    <span className="text-sm">
                        Say back hello!
                    </span>
                </PrimaryButton>
            </div>
        </section >
    )
}
