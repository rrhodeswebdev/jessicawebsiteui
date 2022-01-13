import React from 'react';
import Image from 'next/image';
import { groq } from 'next-sanity';
import { sanityClient } from '../../lib/config';
import dayjs from 'dayjs';
import Heading from '../../components/content/Heading';
import LacedClassBox from '../../components/content/LacedClassBox';
import Head from 'next/head';
import educationImage1 from '../../public/laced-header-1.jpeg';
import educationImage2 from '../../public/laced-header-2.jpeg';
import educationImage3 from '../../public/laced-header-3.jpeg';

const educationQuery = groq`
  *[_type == 'education' && category == 'Laced'] | order(datetime asc)
`;

interface Props {
	data: {
		filteredEducation: {
			_id: string;
			datetime: string;
			description: string;
			lacedUrl: string;
			location: {
				city: string;
				state: string;
			};
			title: string;
			venue: string;
		}[];
	};
}

const EducationPage: React.FC<Props> = ({ data }) => {
	return (
		<section className='container mx-auto max-w-6xl px-8'>
			<Head>
				<title>Education - Graced Studio</title>
				<meta name='description'
					content="Join me in learning today's best methods for applying extensions and other services for your clients." />
			</Head>
			<Heading title='Education' />
			<div className='mb-8'>
				<h2 className='text-3xl mb-6 text-center font-light'>
					Laced Academy
				</h2>
				<p className='font-light mb-4'>
					As a Laced Hair Educator, I enjoy traveling to salons all
					over the US to teach stylists the art of hair extensions.
					Laced Hair Extensions proudly offers six unique extension
					methods (keratin bond, i-tip, tape-ins, clip-ins, hand-tied
					wefts, and machine-sewn wefts) to be able to customize and
					serve your client’s individual needs. Extensions are not a
					“one-size fits all” service!
				</p>
				<p className='font-light mb-4'>
					In any Laced Academy training course, you can expect class
					sizes to remain small. This ensures each attendee is able to
					ask questions and receive one-on-one instruction and
					critique from their Laced Educator. My goal as an educator
					is to teach the fundamentals of proper extension
					installation, removal, and blending techniques so stylists
					are able to incorporate this luxury service into their
					service menus.
				</p>
				<p className='font-light mb-4'>
					Check out the upcoming Laced Academy line-up to sign up for
					a class near you! Don’t see your city in the line-up? No
					worries! We are always looking for host salons all over the
					country! Send me a message and let’s get your salon
					scheduled for a certification class!
				</p>
			</div>
			<div className='flex flex-wrap justify-center xl:justify-between mb-16'>
				<div className='max-w-xs md:pr-2 lg:pr-2 mb-6'>
					<Image
						src={educationImage1}
						alt='Woman standing in forest'
					/>
				</div>
				<div className='max-w-xs md:pl-2 lg:pl-2 mb-6'>
					<Image
						src={educationImage2}
						alt='Woman looking up in forest'
					/>
				</div>
				<div className='max-w-xs lg:pl-2 mb-6'>
					<Image
						src={educationImage3}
						alt='Woman standing in forest'
					/>
				</div>
			</div>
			<div className='w-full'>
				<h2 className='text-3xl mb-6 text-center font-light'>
					Upcoming Classes
				</h2>
				{data.filteredEducation.length > 0 ? (
					data.filteredEducation.map(education => (
						<LacedClassBox
							key={education._id}
							classDetails={education}
						/>
					))
				) : (
					<p className='text-center font-light mb-6'>
						No classes are currently scheduled. Please check back at
						a later date.
					</p>
				)}
			</div>
		</section>
	);
};

export async function getServerSideProps() {
	const education = await sanityClient.fetch(educationQuery);
	const todayDate = dayjs();
	const filteredEducation = education.filter(
		(x: { datetime: Date }) => dayjs(x.datetime) > todayDate
	);

	return {
		props: {
			data: { filteredEducation },
		},
	};
}

export default EducationPage;
