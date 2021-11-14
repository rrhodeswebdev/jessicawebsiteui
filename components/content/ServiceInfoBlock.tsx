import React from 'react';

interface Props {
	service: {
		_id: string;
		category: string;
		costType: string;
		fixedCost?: number;
		dynamicCost?: number;
		rangedCost: {
			min: number;
			max: number;
		};
		description: string;
		time: number;
		title: string;
	};
}

const ServiceInfoBlock: React.FC<Props> = ({ service }) => {
	return (
		<div className='mb-8 pb-8 text-center font-light border-b border-secondary'>
			<h3 className='text-3xl pb-4'>{service.title}</h3>
			{service.costType === 'Fixed' && (
				<p className='text-2xl pb-2'>${service.fixedCost}</p>
			)}
			{service.costType === 'Dynamic' && (
				<p className='text-2xl pb-2'>${service.dynamicCost}+</p>
			)}
			{service.costType === 'Ranged' && (
				<p className='text-2xl pb-2'>
					${service.rangedCost.min} - ${service.rangedCost.max}
				</p>
			)}
			<p className='pb-2'>{service.description}</p>
			<p className='text-sm pb-2'>Est. time: {service.time} minutes</p>
		</div>
	);
};

export default ServiceInfoBlock;
