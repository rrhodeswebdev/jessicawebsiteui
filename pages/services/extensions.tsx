import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import Heading from '../../components/content/Heading';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import Button from '../../components/elements/Button';

interface Props {
	data: {
		extensionsServices: {
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
		}[];
	};
}
const extensionsServiceQuery = groq`
  *[_type == 'services' && category == 'Extensions'] | order(_createdAt asc)
`;

const ExtensionsPage: React.FC<Props> = props => {
	const { data } = props;

	return (
		<section className='container mx-auto max-w-6xl px-8'>
			<Heading title='Extensions' />
			<div className='mb-12'>
				<img src='/extension-header.jpeg' alt='Styling Services' />
			</div>
			<div>
				{data.extensionsServices.map(service => (
					<ServiceInfoBlock service={service} key={service._id} />
				))}
			</div>
			<div className='text-center'>
				<h3 className='text-4xl pb-4 font-light'>Extensions Offered</h3>
				<ul className='font-light mb-6 text-lg'>
					<li>Beaded Weft</li>
					<li>Tape Ins</li>
					<li>Clip Ins</li>
					<li>Halo</li>
					<li>Keratin</li>
				</ul>
				<p className='font-light'>
					I offer a variety of extension methods to create a custom
					experience for each guest. I require an in-person
					consultation for any new extension client. Pricing and
					method determined during the consultation.
				</p>
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
