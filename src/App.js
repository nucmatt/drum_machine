import React from 'react';
import Drumpad from './components/Drumpad';
import './scss/style.scss';

function App() {
	const Pads = [
		{
			keyCode: 81,
			actionKey: 'Q',
			id: 'Heater-1',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
		},
		{
			keyCode: 87,
			actionKey: 'W',
			id: 'Heater-2',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
		},
		{
			keyCode: 69,
			actionKey: 'E',
			id: 'Heater-3',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
		},
		{
			keyCode: 65,
			actionKey: 'A',
			id: 'Heater-4',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
		},
		{
			keyCode: 83,
			actionKey: 'S',
			id: 'Heater-6',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
		},
		{
			keyCode: 68,
			actionKey: 'D',
			id: 'Open-HH',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
		},
		{
			keyCode: 90,
			actionKey: 'Z',
			id: 'Kick-Hat',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
		},
		{
			keyCode: 88,
			actionKey: 'X',
			id: 'Kick',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
		},
		{
			keyCode: 67,
			actionKey: 'C',
			id: 'Closed-HH',
			url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
		},
	];

	return (
		<div className='container'>
			<main id='drum-machine'>
				<section id='drumkit' className='grid-3 card'>
					{Pads.map((pad) => (
						<Drumpad pad={pad} />
					))}
				</section>
				<section id='display' className='card'>
					<div>Drum sound goes here</div>
					<div>Volume slider goes here</div>
				</section>
			</main>
		</div>
	);
}

export default App;
