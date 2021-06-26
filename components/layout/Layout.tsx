import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex-grow container mx-auto p-8'>{children}</main>
      <Footer />
    </div>
  );
}
