import React from 'react'

export default function Badge(props) {
    return (
        <span className='border-sky-500 border-1 px-3 py-1 bg-sky-700 font-prime rounded-xl font-semibold text-sm'>
            {props.children}
        </span>
    )
}
