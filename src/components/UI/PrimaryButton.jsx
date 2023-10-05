import React from 'react';

export default function PrimaryButton(props) {
    return (
        <div className='text-white text-opacity-100 box-border' onClick={props.clickHandler}>
            <button className='outline font-normal outline-sky-400 px-6 py-2 rounded cursor-pointer hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-sky-500  hover:shadow-[4px_4px_0px_0px] ease-in duration-300'>
                {props.children}
            </button>
        </div>
    )
}
