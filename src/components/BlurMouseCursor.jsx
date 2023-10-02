import React, { useState, useEffect } from 'react';

export default function BlurMousePointer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    return (
        <div
            className="pointer"
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
            }}
        ></div>
    );
};

