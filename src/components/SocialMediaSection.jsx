import React from 'react'
import SocialMediaIcon from './SocialMediaIcon'

export default function SocialMediaSection() {
    const profilePlatforms = ['linkedin', 'github', 'twitter', 'instagram'];
    return (
        <div className='text-white mt-5 flex gap-12 align-middle'>
            {profilePlatforms.map(platform => <SocialMediaIcon type={platform} />)}
        </div>
    )
}
