import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Navbar />
			<main className='md:min-h-screen'>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
