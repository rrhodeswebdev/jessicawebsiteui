import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import Heading from '../../components/content/Heading';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import Button from '../../components/elements/Button';

interface Props {
	data: {
		stylingServices: {
			_id: string;
			category: string;
			cost: number;
			description: string;
			time: number;
			title: string;
		}[];
	};
}
const stylingServiceQuery = groq`
  *[_type == 'services' && category == 'Styling'] | order(_createdAt asc)
`;

const StylingPage: React.FC<Props> = props => {
	const { data } = props;

	return (
		<section className='container mx-auto max-w-6xl px-8'>
			<Heading title='Styling' />
			<div className='mb-12'>
				<img src='/styling-header.jpeg' alt='Styling Services' />
			</div>
			<div>
				{data.stylingServices.map(service => (
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
	const stylingServices = await sanityClient.fetch(stylingServiceQuery);

	return {
		props: {
			data: { stylingServices },
		},
	};
}

export default StylingPage;
