import React from 'react';

interface Props {
	service: {
		_id: string;
		category: string;
		cost: number;
		description: string;
		time: number;
		title: string;
	};
}

const ServiceInfoBlock: React.FC<Props> = ({ service }) => {
	return (
		<div className='mb-8 pb-8 text-center font-light border-b border-secondary'>
			<h2 className='text-4xl pb-4'>{service.title}</h2>
			<p className='text-2xl pb-2'>${service.cost}+</p>
			<p className='pb-2'>{service.description}</p>
			<p className='text-sm pb-2'>Est. time: {service.time} minutes</p>
		</div>
	);
};

export default ServiceInfoBlock;
