import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import profile from '../profile.json';

export default function Contact() {
    const { email } = profile;
    return (
        <div id='contact' className='h-[130px] sm:h-[200px] md:h-[250px] bg-sky-600 w-[100%] text-center text-slate-300 text-high-l flex flex-col justify-center'>
            <p className='text-[15px] sm:text-[20px] md:text-[25px]'>
                <FontAwesomeIcon icon={faPaperPlane} className='mr-3' />
                drop me an e-mail at &nbsp;
                <br />
                <a className='text-slate-900 text-[20px] sm:text-[25px] md:text-[35px] lg:text-[40px] cursor-pointer font-semibold' href={'mailto:' + email} target='_blank' rel='noreferrer'>
                    {email}
                </a>
            </p>

        </div>
    )
}
