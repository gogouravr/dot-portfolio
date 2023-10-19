import React from 'react';

export default function PrimaryButton(props) {
    return (
        <div className='dark:text-white text-slate-900 text-opacity-100 box-border' onClick={props.clickHandler}>
            <button className='dark:outline bg-sky-500 dark:bg-slate-900 outline-1 font-thin font-normal outline-sky-400 px-6 py-2 rounded cursor-pointer hover:translate-x-[-8px] hover:translate-y-[-8px] dark:hover:shadow-sky-500 :hover:shadow-slate-700 hover:shadow-[5px_5px_0px_0px] focus:translate-x-[-4px] focus:translate-y-[-4px] dark:focus:shadow-sky-500 focus:shadow-slate-700  focus:shadow-[4px_4px_0px_0px] ease-out duration-300'>
                {props.children}
            </button>
        </div>
    )
}
