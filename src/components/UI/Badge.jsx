import React from 'react'

export default function Badge(props) {
    return (
        <span className='px-3 py-0.5 bg-sky-600 font-prime rounded-2xl font-semibold text-[0.72rem] sm:text-[0.8rem]  md:text-[0.85rem] tracking-normal'>
            {props.children}
        </span>
    )
}
