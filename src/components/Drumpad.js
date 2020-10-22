import React, { useEffect } from 'react';

const Drumpad = ({
	pad: { keyCode, actionKey, id, url },
	updateDisplay,
	volume,
}) => {
	const playSound = () => {
		const audio = document.getElementById(actionKey);
		audio.currentTime = 0;
		audio.volume = volume;
		audio.play();
		updateDisplay(id);
	};

	const keyHandler = (e) => {
		if (e.keyCode === keyCode) {
			playSound();
		}
	};

	useEffect(() => {
		document.addEventListener('keydown', keyHandler);
		return () => {
			document.removeEventListener('keydown', keyHandler);
		};
	});
	return (
		<button className='btn drum-pad' id={id} onClick={() => playSound()}>
			<audio src={url} className='clip' id={actionKey}></audio>
			{actionKey}
		</button>
	);
};

export default Drumpad;
