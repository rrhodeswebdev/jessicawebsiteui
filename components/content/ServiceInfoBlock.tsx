import React from 'react';
import { Service } from './ServiceInterface';

interface ServiceInfoBlockProps {
	service: Service;
}

function ServiceInfoBlock(props: ServiceInfoBlockProps) {
	const { service } = props;
	return (
		<div className='mb-8 pb-8 text-center font-light border-b border-secondary'>
			<h2 className='text-4xl pb-4'>{service.title}</h2>
			<p className='text-2xl pb-2'>${service.cost}+</p>
			<p className='pb-2'>{service.description}</p>
			<p className='text-sm pb-2'>Est. time: {service.time} minutes</p>
		</div>
	);
}

export default ServiceInfoBlock;
