import React from 'react';
import SocialMediaSection from './SocialMediaSection.jsx';
import profile from '../profile.json'
import PrimaryButton from './UI/PrimaryButton.jsx';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {


    return (
        <section className="flex flex-col justify-center mt-10 px-32">
            <div className="text-sky-400 font-normal text-2xl mt-20 mb-2">
                👋 Hi, my name is
            </div>

            <div className="text-slate-300 font-semibold font-high-l text-6xl opacity-90 leading-15">
                {profile['first-name'] + ' ' + profile['last-name'] + '.'}
            </div>

            <div className="text-white font-high-l font-bold text-5xl mt-3 mb-3 text-4 opacity-50 leading-tight ">
                {profile.intros[0]}
            </div>

            <atricle className='text-white font-thin text-xl font-sans opacity-85 w-[55%]'>
                {profile.bio}
            </atricle>

            {profile.wip &&
                <span className='text-white text-sm font-sans mt-5 opacity-80'>
                    {profile['wip-text'] + " "}
                    <span className='cursor-pointer' onClick={() => window.open(profile['project-link'], '_target')}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                </span>
            }

            <SocialMediaSection />
            <div className="mt-8">
                <PrimaryButton>Say back hello! </PrimaryButton>
            </div>
        </section >
    )
}
