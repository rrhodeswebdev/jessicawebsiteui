import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import Heading from '../../components/content/Heading';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import { Service } from '../../components/content/ServiceInterface';
import Button from '../../components/elements/Button';

interface ExtensionsServiceProps {
	data: { extensionsServices: [] };
}

const extensionsServiceQuery = groq`
  *[_type == 'services' && category == 'Extensions'] | order(_createdAt asc)
`;

export const ExtensionsPage = (props: ExtensionsServiceProps) => {
	const { data } = props;

	return (
		<section className='container mx-auto max-w-6xl'>
			<Heading title='Extensions' />
			<div className='mb-12'>
				<img src='/extension-header.jpeg' alt='Styling Services' />
			</div>
			<div>
				{data.extensionsServices.map((service: Service) => (
					<ServiceInfoBlock service={service} key={service._id} />
				))}
			</div>
			<div className='m-6 p-6'>
				<p className='text-center font-light text-sm italic'>
					*Additional time may result in additional charges to all
					services listed above
				</p>
			</div>
			<div className='flex justify-center items-center m-6'>
				<Button href='/booking/appointment'>Appointments</Button>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const extensionsServices = await sanityClient.fetch(extensionsServiceQuery);

	return {
		props: {
			data: { extensionsServices },
		},
	};
}

export default ExtensionsPage;
