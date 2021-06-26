import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HiOutlineMenu as MenuIcon } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

function ActiveLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`md:pl-6 md:ml-6 block py-4 hover:text-secondary transition-colors ${
        router.asPath === href ? 'text-secondary' : 'text-primary'
      }`}
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [mobileToggle, setMobileToggle] = useState(false);

  const onMobileMenuClick = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <header className='p-6'>
      <nav className='container relative mx-auto'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <a>
              <Image
                src='/jesserhodes-logo.svg'
                alt='Jesse Rhodes Logo'
                width='auto'
                height={86}
              />
            </a>
          </Link>
          <div className='md:flex items-center hidden'>
            <ActiveLink href='/about'>About</ActiveLink>
            <ActiveLink href='/services'>Services</ActiveLink>
            <ActiveLink href='/education'>Education</ActiveLink>
            <ActiveLink href='/contact'>Contact</ActiveLink>
          </div>
          <button
            className='md:hidden focus:outline-none'
            onClick={onMobileMenuClick}
          >
            <MenuIcon className='text-3xl' />
          </button>
        </div>
        <Transition
          appear={true}
          show={mobileToggle}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div
            className={`${
              mobileToggle ? 'block' : 'hidden'
            } absolute items-center md:hidden w-full z-20 bg-gray-200 text-center mt-6`}
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
}