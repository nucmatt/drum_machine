import React from 'react';

const Volumeslider = ({ updateVolume }) => {
    const changeVolume = () => {
        const volume = document.getElementById('drumvolume');
		updateVolume(volume.value / 100);
	};

	return (
		<div className='slidecontainer'>
			<input
				type='range'
				id='drumvolume'
				className='slider'
				min='1'
				max='100'
				onInput={() => changeVolume()}
			/>
		</div>
	);
};

export default Volumeslider;
