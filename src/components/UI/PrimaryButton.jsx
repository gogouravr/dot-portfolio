import React from 'react';

export default function PrimaryButton(props) {
    return (
        <div className='text-white font-semibold text-opacity-80 flex' onClick={props.clickHandler}>
            <button className='border-2 border-sky-500 px-4 py-2 rounded-lg cursor-pointer  hover:border-t-4  hover:border-l-4 ease-in duration-300'>
                {props.children}
            </button>
        </div>
    )
}
