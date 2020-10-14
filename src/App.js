import React, { useEffect } from 'react';
import './scss/style.scss';

function App() {
	const playSound = () => {
    const audio = document.getElementById('Q');
    audio.currentTime = 0;
    audio.play();
  };

  const keyHandler = (e) => {
    if (e.keyCode === 81) {
      playSound();
    }
  }
  
  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    }
  })
	return (
		<div id='drum-machine'>
			<div className='display'>
				<button
					className='drum-pad btn'
					id='highhat1'
					onClick={() => playSound()}
				>
					<audio
						src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
						className='clip'
						id='Q'
					></audio>
					Q
				</button>
			</div>
		</div>
	);
}

export default App;
