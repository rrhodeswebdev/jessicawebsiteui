import React from 'react';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import Heading from '../../components/content/Heading';
import Testimonials from '../../components/content/Testimonials';
import Button from '../../components/elements/Button';
import ServiceInfoBlock from '../../components/content/ServiceInfoBlock';
import Head from 'next/head';
import serviceHeaderImage from '../../public/styling-header.jpeg';

interface Props {
	data: {
		testimonials: {
			testimonial: string;
			_id: string;
		}[];
		services: {
			styling: {
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
			extensions: {
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
			color: {
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
	};
}

const testimonialQuery = groq`
  *[_type == 'testimonials' && forPage == 'Services']
`;

const servicesQuery = groq`
	{
 		"styling": *[_type == 'services' && category == 'Styling'],
  		"color": *[_type == 'services' && category == 'Color'],
 		"extensions": *[_type == 'services' && category == 'Extensions']
	}
`;

const ServicesPage: React.FC<Props> = props => {
	const {
		data: { testimonials, services },
	} = props;

	return (
		<section className='container mx-auto max-w-6xl px-4'>
			<Head>
				<title>Services - Graced Studio</title>
				<meta name='description'
					content="Luxurious styling, high-quality coloring, and the best extension services in Concord, North Carolina." />
			</Head>
			<Heading title='Services' />
			<div className='mb-12'>
				<Image src={serviceHeaderImage} alt='Styling Services' />
			</div>
			<div className='mb-16'>
				<h2 className='text-4xl mb-10 p-4 text-center bg-shade'>
					Styling
				</h2>
				{services.styling.map(service => (
					<ServiceInfoBlock service={service} key={service._id} />
				))}
			</div>
			<div className='mb-16'>
				<h2 className='text-4xl mb-10 p-4 text-center bg-shade'>
					Color
				</h2>
				{services.color.map(service => (
					<ServiceInfoBlock service={service} key={service._id} />
				))}
			</div>
			<div className='mb-16'>
				<h2 className='text-4xl mb-10 p-4 text-center bg-shade'>
					Extensions
				</h2>
				{services.extensions.map(service => (
					<ServiceInfoBlock service={service} key={service._id} />
				))}
				<div className='text-center'>
					<h3 className='text-4xl pb-4 font-light'>
						Extensions Offered
					</h3>
					<ul className='font-light mb-6 text-lg'>
						<li>Beaded Weft</li>
						<li>Tape Ins</li>
						<li>Clip Ins</li>
						<li>I-Tip</li>
						<li>Keratin</li>
					</ul>
					<p className='font-light border-b border-secondary pb-8'>
						I offer a variety of extension methods to create a
						custom experience for each guest. I require an in-person
						consultation for any new extension client. Pricing and
						method determined during the consultation.
					</p>
				</div>
			</div>
			<div className='p-6 mb-8'>
				<p className='text-center font-light text-sm italic'>
					*Additional time may result in additional charges to all
					services listed above
				</p>
			</div>

			<Testimonials testimonials={testimonials} />
			<div className='flex justify-center mb-6'>
				<Button href='/booking/appointment'>Appointments</Button>
			</div>
		</section>
	);
};

export async function getStaticProps() {
	const testimonials = await sanityClient.fetch(testimonialQuery);
	const services = await sanityClient.fetch(servicesQuery);

	return {
		props: {
			data: { testimonials, services },
		},
	};
}

export default ServicesPage;
