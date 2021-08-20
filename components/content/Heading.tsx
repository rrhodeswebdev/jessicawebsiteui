import React from 'react';

interface Props {
	title: string;
}

const Heading: React.FC<Props> = ({ title }) => {
	return (
		<div className='text-center border-b border-secondary my-8'>
			<h1 className='text-5xl pb-4 font-light'>{title}</h1>
		</div>
	);
};

export default Heading;
