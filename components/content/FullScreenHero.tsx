import React from 'react';
import Image from 'next/image'

interface Props {
    image: StaticImageData;
    altText: string;
}

const FullScreenHero: React.FC<Props> = ({ image, altText }) => {
    return (
        <div className='mb-8 relative w-full h-96 lg:h-fs'>
            <Image
                src={image}
                alt={altText}
                layout='fill'
                objectFit='cover'
            />
        </div>
    );
};

export default FullScreenHero;
