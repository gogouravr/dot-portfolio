import React from 'react';
import SocialMediaSection from './SocialMediaSection.jsx';
import config from '../config.json'
import PrimaryButton from './UI/PrimaryButton.jsx';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {

    const resumeButtonClickHandler = () => {
        window.open('/resume.pdf', '_blank');
    }

    return (
        <section className="flex flex-col justify-center mt-16">
            <div className="text-white font-normal text-2xl mt-20 mb-2 opacity-80">
                👋 Hi, my name is
            </div>

            <div className="text-sky-500 font-high-l text-7xl opacity-90">
                {config['first-name'] + ' ' + config['last-name']}
            </div>

            <div className="text-white font-high-l  text-5xl mt-3 mb-2 text-4 opacity-60 leading-tight">
                And I am a Full-Stack Developer
            </div>

            <atricle className='text-white text-xl font-normal opacity-40 w-3/4'>
                {config.bio}
            </atricle>

            {config.wip &&
                <span className='text-white text-sm font-sans mt-5 opacity-80'>
                    {config['wip-text'] + " "}
                    <span className='cursor-pointer' onClick={() => window.open(config['project-link'], '_target')}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                </span>
            }

            <SocialMediaSection />
            <div className="mt-5">
                <PrimaryButton text="Résumé" clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
            </div>
        </section>
    )
}
