import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import Heading from '../../components/content/Heading';
import ServiceCard from '../../components/content/ServiceCard';
import Testimonials from '../../components/content/Testimonials';
import Button from '../../components/elements/Button';

interface ServicesProps {
	data: { testimonials: [] };
}

const testimonialQuery = groq`
  *[_type == 'testimonials' && forPage == 'Services']
`;

export default function ServicesPage(props: ServicesProps) {
	const { data: testimonials } = props;

	const services = [
		{
			id: 1,
			title: 'Styling',
			img: '/styling-service.jpeg',
			imgAlt: 'Styling Service Image',
			url: '/services/styling',
		},
		{
			id: 2,
			title: 'Color',
			img: '/color-service.jpeg',
			imgAlt: 'Color Service Image',
			url: '/services/color',
		},
		{
			id: 3,
			title: 'Extensions',
			img: '/extension-service.jpeg',
			imgAlt: 'Extensions Service Image',
			url: '/services/extensions',
		},
	];

	return (
		<section className='container mx-auto max-w-6xl'>
			<Heading title='Services' />
			<div className='flex flex-wrap justify-center items-center mb-6'>
				{services.map(service => (
					<ServiceCard key={service.id} service={service} />
				))}
			</div>
			<Testimonials testimonials={testimonials.testimonials} />
			<div className='flex justify-center mb-6'>
				<Button href='/booking/appointment'>Appointments</Button>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	const testimonials = await sanityClient.fetch(testimonialQuery);

	return {
		props: {
			data: { testimonials },
		},
	};
}
