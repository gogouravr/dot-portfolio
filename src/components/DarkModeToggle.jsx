import React, { useState } from 'react'

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setDarkMode(!darkMode);
    };

    return (
        <div className='fixed right-2 top-40'>
            <input className='hidden' id="switch" type="checkbox" checked={!darkMode} onChange={toggleDarkMode} />
            <label htmlFor="switch" className='bg-sky-200 w-14 hidden sm:block h-7 rounded-3xl cursor-pointer'>
            </label>
        </div>
    )
}
