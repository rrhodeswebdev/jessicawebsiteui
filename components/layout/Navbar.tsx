import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineMenu as MenuIcon } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

interface Props {
	children: React.ReactNode;
	href: string;
}

const ActiveLink: React.FC<Props> = ({ children, href }) => {
	const router = useRouter();

	const handleClick = (e: React.SyntheticEvent ) => {
		e.preventDefault();
		router.push(href);
	};

	return (
		<a
			href={href}
			onClick={handleClick}
			className={`md:pl-6 md:ml-6 block py-4 hover:text-secondary transition-colors uppercase font-light ${
				router.asPath === href ? 'text-secondary' : 'text-primary'
			}`}
		>
			{children}
		</a>
	);
};

const Navbar = () => {
	const [mobileToggle, setMobileToggle] = useState(false);

	const onMobileMenuClick = () => {
		setMobileToggle(!mobileToggle);
	};

	return (
		<header className='relative px-12 py-6'>
			<nav className='mx-auto'>
				<div className='flex justify-between items-center'>
					<Link href='/'>
						<a className='w-48'>
							<img src='/main-logo.png' />
						</a>
					</Link>
					<div className='lg:flex items-center hidden'>
						<ActiveLink href='/about'>About</ActiveLink>
						<ActiveLink href='/services'>Services</ActiveLink>
						<ActiveLink href='/education'>Education</ActiveLink>
						<ActiveLink href='/contact'>Contact</ActiveLink>
					</div>
					<button
						className='lg:hidden focus:outline-none'
						onClick={onMobileMenuClick}
					>
						<MenuIcon className='text-3xl' />
					</button>
				</div>
				<Transition show={mobileToggle}>
					<div
						className={`${
							mobileToggle ? 'block' : 'hidden'
						} absolute items-center lg:hidden w-screen left-0 z-20 bg-gray-200 text-center mt-6 p-6`}
						onClick={onMobileMenuClick}
					>
						<ActiveLink href='/about'>About</ActiveLink>
						<ActiveLink href='/services'>Services</ActiveLink>
						<ActiveLink href='/education'>Education</ActiveLink>
						<ActiveLink href='/contact'>Contact</ActiveLink>
					</div>
				</Transition>
			</nav>
		</header>
	);
};

export default Navbar;
