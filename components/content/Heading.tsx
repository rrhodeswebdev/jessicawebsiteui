import React from 'react';

export default function Heading({ title }: { title: string }) {
	return (
		<div className='text-center border-b border-secondary mb-6'>
			<h1 className='text-5xl pb-4 font-light'>{title}</h1>
		</div>
	);
}
