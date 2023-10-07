import React from 'react';

export default function PrimaryButton(props) {
    return (
        <div className='text-white text-opacity-100 box-border' onClick={props.clickHandler}>
            <button className='outline outline-1 font-thin font-normal outline-sky-400 px-6 py-2 rounded cursor-pointer hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-sky-500  hover:shadow-[4px_4px_0px_0px] focus:translate-x-[-4px] focus:translate-y-[-4px] focus:shadow-sky-500  focus:shadow-[4px_4px_0px_0px] ease-out duration-300'>
                {props.children}
            </button>
        </div>
    )
}
