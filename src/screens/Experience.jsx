import React from 'react';
import profile from '../profile.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

export default function Experience() {
    return (
        <div className='my-20 a sm:mt-10 md:mt-40 lg:mt-60 mx-auto w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12' id='about'>
            <h2 className='text-white font-medium text-2xl font-high-l self-start lg:text-3xl relative hor-bar first:mr-2 opacity-70'>
                <FontAwesomeIcon icon={faAddressCard} className='mr-3' />
                Experience
            </h2>

        </div>
    )
}
