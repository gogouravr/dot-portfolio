import React from 'react';
import SocialMediaSection from './SocialMediaSection.jsx';
import config from '../config.json'
import PrimaryButton from './PrimaryButton.jsx';

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

            <div className="text-white font-high-l  text-5xl mt-5 text-2 opacity-50 leading-tight">
                And I am a Full-Stack Developer
            </div>

            <SocialMediaSection />

            <PrimaryButton text="Résumé" clickHandler={resumeButtonClickHandler}>Résumé</PrimaryButton>
        </section>
    )
}
