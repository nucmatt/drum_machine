import React, { useEffect } from 'react';

const Drumpad = ({ pad: { keyCode, actionKey, id, url }}) => {
	const playSound = () => {
		const audio = document.getElementById(actionKey);
		audio.currentTime = 0;
		audio.play();
	};

	const keyHandler = (e) => {
		if (e.keyCode === keyCode) {
			playSound();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', keyHandler);
		return () => {
			window.removeEventListener('keydown', keyHandler);
		};
	});
	return (
		<button className='drum-pad btn' id={id} onClick={() => playSound()}>
			<audio
				src={url}
				className='clip'
				id={actionKey}
			></audio>
			{actionKey}
		</button>
	);
};

export default Drumpad;