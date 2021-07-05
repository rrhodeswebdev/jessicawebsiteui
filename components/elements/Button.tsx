import React from 'react';
import Link from 'next/link';

export default function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <a className='p-4 mx-8 mb-8 md:mb-0 w-52 rounded text-white text-center bg-primary hover:bg-accent transition-colors'>
        {children}
      </a>
    </Link>
  );
}
