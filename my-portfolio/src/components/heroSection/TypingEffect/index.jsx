import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this file exists and is correctly imported

const TypingEffect = ({ text, speed = 100 }) => {
    const [typedText, setTypedText] = useState(text.charAt(0));

    useEffect(() => {
        let index = 1;
        const intervalId = setInterval(() => {
            if (index < text.length) {
                setTypedText((value) => value + text.charAt(index));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId);
    }, [text, speed]);

    return <div className="w-full overflow-x-hidden text-wrap ml-3 text-lg lg:text-2xl xl:ml-32 text-white mb-8">
                <span className='typing-effect break-words'>{typedText}</span>
           </div>;
};

export default TypingEffect;

