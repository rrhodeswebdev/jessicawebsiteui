import React from 'react';
import { groq } from 'next-sanity';
import { sanityClient } from '../lib/config';
import FullScreenHero from '../components/content/FullScreenHero';
import Testimonials from '../components/content/Testimonials';
import Button from '../components/elements/Button';

interface HomeProps {
	data: {
		testimonials: [];
	};
}

interface Props {
	data: {
		testimonials: {
			testimonial: string;
			_id: string;
		}[];
	};
}

const testimonialQuery = groq`
  *[_type == 'testimonials' && forPage == 'Home']
`;

const HomePage: React.FC<Props> = props => {
	const { data: testimonials } = props;

	return (
		<>
			<FullScreenHero image='/home-page-header.jpeg' />
			<Testimonials testimonials={testimonials.testimonials} />
			<div className='flex flex-col md:flex-row justify-center items-center p-6 md:mb-8'>
				<Button href='/booking/appointment'>Appointments</Button>
				<Button href='/education'>Classes</Button>
			</div>
		</>
	);
};

export async function getStaticProps() {
	const testimonials = await sanityClient.fetch(testimonialQuery);

	return {
		props: {
			data: { testimonials },
		},
	};
}

export default HomePage;
