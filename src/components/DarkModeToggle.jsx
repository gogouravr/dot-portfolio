import React, { useState } from 'react'

export default function DarkModeToggle() {

    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle('dark');
        setDarkMode(!darkMode);
    };

    return (
        <div className='fixed'>
            <input type="checkbox" checked={!darkMode} onChange={toggleDarkMode} />
        </div>
    )
}
