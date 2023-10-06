import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
    const clickHandler = () => window.open(URL, '_blank');

    return (
        <span className='cursor-pointer opacity-80'>
            <FontAwesomeIcon icon={icon} fontSize={iconSize} onClick={clickHandler} />
        </span>
    )
}
