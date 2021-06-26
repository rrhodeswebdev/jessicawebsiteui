import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='container mx-auto p-8'>
      <div className='flex justify-center content-center mb-4'>
        <a href='https://facebook.com/jesserhodeshair' target='_blank'>
          <FaFacebookSquare className='text-3xl m-2 cursor-pointer text-primary hover:text-secondary transition-colors' />
        </a>
        <a href='https://instagram.com/jesserhodes_hair' target='_blank'>
          <FaInstagram className='text-3xl m-2 cursor-pointer text-primary hover:text-secondary transition-colors' />
        </a>
      </div>
      <div className='flex justify-center content-center'>
        <span className='text-xs text-primary'>
          Copyright &copy; {new Date().getFullYear()} | Made with ❤️ by{' '}
          <a
            href='https://ryanrhodes.io'
            target='_blank'
            className='hover:text-secondary'
          >
            Ryan Rhodes
          </a>
        </span>
      </div>
    </footer>
  );
}
