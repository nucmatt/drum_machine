import React from 'react';

const Footer = () => {
	return (
		<footer className='navbar bg-primary'>
			<p id="creatorname">
				Created by{' '}
				<a
					href='https://www.matthew-a-wessel.dev'
					target='_blank'
					rel='noreferrer noopener'
				>
					Matthew Wessel
				</a>
			</p>
			<p id='socials'>
				<a
					href='https://www.linkedin.com/in/matthew-a-wessel'
					target='_blank'
					rel='noreferrer noopener'
				>
					<i className='fab fa-linkedin fa-2x'></i>
				</a>
				<a
					href='https://github.com/nucmatt'
					target='_blank'
					rel='noreferrer noopener'
				>
					<i className='fab fa-github fa-2x'></i>
				</a>
				<a
					href='https://www.freecodecamp.org/nucmatt'
					target='_blank'
					rel='noreferrer noopener'
				>
					<i className='fab fa-free-code-camp fa-2x'></i>
				</a>
			</p>
			<p id='sourcecodelink'>
				View <a href="https://www.github.com/nucmatt/drum_machine" target='_blank' rel='noreferrer noopener'>Source Code</a> on Github
			</p>
		</footer>
	);
};

export default Footer;
