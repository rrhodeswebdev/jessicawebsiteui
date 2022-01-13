import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
	return (
		<footer className='container mx-auto p-8'>
			<div className='flex justify-center content-center mb-4'>
				<a href='https://facebook.com/jessegracedstudio' target='_blank' rel="noreferrer">
					<FaFacebookSquare className='text-3xl m-2 cursor-pointer text-primary hover:text-accent transition-colors' />
				</a>
				<a
					href='https://instagram.com/jesse_gracedstudio'
					target='_blank'
					rel="noreferrer"
				>
					<FaInstagram className='text-3xl m-2 cursor-pointer text-primary hover:text-accent transition-colors' />
				</a>
			</div>
			<div className='flex justify-center content-center'>
				<span className='text-xs text-primary'>
					Copyright &copy; {new Date().getFullYear()} | Made with ❤️
					by{' '}
					<a
						href='https://ryanrhodes.io'
						target='_blank'
						rel="noreferrer"
						className='hover:text-accent'
					>
						Ryan Rhodes
					</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
