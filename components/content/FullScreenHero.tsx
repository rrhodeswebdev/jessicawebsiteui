import React from 'react';

export default function FullScreenHero({ image }: { image: string }) {
  return (
    <div className='w-screen mb-8'>
      <img
        className='w-full object-cover'
        style={{ maxHeight: '750px' }}
        src={image}
      />
    </div>
  );
}
