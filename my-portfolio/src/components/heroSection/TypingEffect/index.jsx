import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './index.css'; 


// Define TypingEffect component
// This component creates a typing animation for a givent text
const TypingEffect = ({ text, speed = 100 }) => {

     // State to hold the currently displayed text
    const [typedText, setTypedText] = useState(text.charAt(0));

    useEffect(() => {
        let index = 1;
         // Set an interval to update the text at each 'speed' interval
        const intervalId = setInterval(() => {
            // Check if the entire text has been typed
            if (index < text.length) {
                // Update the typedText state with the next character
                setTypedText((value) => value + text.charAt(index));
                index++;
            } else {
                 // Clear the interval if the entire text is typed
                clearInterval(intervalId);
            }
        }, speed);

        // Cleanup function to clear the interval
        return () => clearInterval(intervalId);
    }, [text, speed]);

    // Render the typed text within a div
    return <div className="w-3/4 overflow-x-hidden text-wrap ml-5 text-md lg:text-2xl xl:ml-32 text-white mb-8">
                <span className='typing-effect break-words'>{typedText}</span>
           </div>;
};


TypingEffect.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
};


export default TypingEffect;

