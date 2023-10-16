import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter, faGith } from '@fortawesome/free-brands-svg-icons';
import profile from '../profile.json';


export default function SocialMediaIcon({ type, iconSize }) {
    const iconTypes = {
        'linkedin': faLinkedin,
        'github': faGithub,
        'instagram': faInstagram,
        'twitter': faTwitter
    }

    const icon = iconTypes[type];
    const URL = profile['social-media-links'][type];

    return (
        <a href={URL} target='_blank' rel='noreferrer' className='text-slate-900 dark:text-white cursor-pointer dark:opacity-80 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-sky-400 rounded px-1 py-1'>
            <FontAwesomeIcon icon={icon} fontSize={iconSize} className='transition ease-in-out duration-230 hover:-translate-y-2' />
        </a>
    )
}
