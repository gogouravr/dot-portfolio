import React from 'react';
import SocialMediaSection from './SocialMediaSection.jsx';
import config from '../config.json'
import PrimaryButton from './PrimaryButton.jsx';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Intro() {
    const resumeButtonClickHandler = () => {
        window.open('/Gourav_Raj_Full_Stack_Developer.pdf', '_blank');
    }
    return (
        <section className="flex flex-col justify-center">
            <div className="text-white font-normal text-2xl mt-20 mb-2 opacity-80">
                👋 Hi, my name is
            </div>

            <div className="text-white font-high-l text-7xl text-sky-400/100 opacity-80">
                {config['first-name'] + ' ' + config['last-name']}
            </div>

            <div className="text-white font-high-l  text-5xl mt-3 text-4 opacity-70 leading-tight">
                And I am a Full-Stack Developer
            </div>

            <atricle className='text-white text-2xl font-normal opacity-40 w-3/4'>
                {config.bio}
            </atricle>

            {config.wip &&
                <span className='text-white text-sm font-sans mt-5 opacity-90'>
                    {config['wip-text'] + " "}
                    <span className='cursor-pointer' onClick={() => window.open(config['project-link'], '_target')}>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </span>
                </span>
            }

            <SocialMediaSection />

            <PrimaryButton text="Résumé" clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
        </section>
    )
}
