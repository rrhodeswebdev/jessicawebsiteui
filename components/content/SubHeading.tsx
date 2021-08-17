import React from 'react';

interface Props {
	title: string;
}

const SubHeading: React.FC<Props> = ({ title }) => {
	return (
		<div className='border-b border-secondary w-5/6 mb-4'>
			<h3 className='font-light text-xl pb-2'>{title}</h3>
		</div>
	);
};

export default SubHeading;
