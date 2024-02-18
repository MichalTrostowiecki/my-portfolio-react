import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this file exists and is correctly imported

const TypingEffect = ({ text, speed = 100 }) => {
	const [typedText, setTypedText] = useState('');

	useEffect(() => {
		let index = 0;
		const intervalId = setInterval(() => {
		// Update the text only if the index is within the text length
			if (index < text.length) {
				setTypedText((value) => value + text.charAt(index));
				index++;
			} else {
				clearInterval(intervalId); // Clear interval if end of text is reached
			}
		}, speed);

		return () => clearInterval(intervalId); // Clean up interval on component unmount
	}, [text, speed]);

	return <div className="max-w-full text-wrap ml-3 text-xl lg:text-2xl xl:ml-32 text-white mb-8">
				<span className='typing-effect'>{typedText}</span>
           </div>;
};

export default TypingEffect;

