import React from 'react';

interface Props {
	image: string;
}

const FullScreenHero: React.FC<Props> = ({ image }) => {
	return (
		<div className='w-screen mb-8'>
			<img
				className='w-full object-cover'
				style={{ maxHeight: '750px' }}
				src={image}
			/>
		</div>
	);
};

export default FullScreenHero;
