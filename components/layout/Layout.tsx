import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <main className='md:min-h-screen'>{children}</main>
      <Footer />
    </div>
  );
}
