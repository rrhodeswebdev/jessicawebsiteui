import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Heading from '../../components/content/Heading';
import Button from '../../components/elements/Button';
import aboutMeHeader from '../../public/about-me.jpeg';

const AboutPage: React.FC = () => {
	return (
		<div className='container mx-auto p-6 max-w-6xl'>
			<Head>
				<title>About - Graced Studio</title>
				<meta name='description'
					content="Graced Studio is ran by Jesse Rhodes, an expert styling specializing in blonde coloring and extension services." />
			</Head>
			<Heading title='About Me' />
			<div className='grid grid-cols-6 gap-6 pt-6'>
				<div className='mb-6 lg:mb-0 object-cover col-span-full lg:col-start-1 lg:col-end-4'>
					<Image
						src={aboutMeHeader}
						alt='Rhodes family photo'
					/>
				</div>
				<div className='col-span-full lg:col-start-4 lg:col-end-7 font-light'>
					<p className='mb-4'>
						First and foremost, I am a wife and a mother. My husband
						Ryan and I met in kindergarten, and he is literally the
						love of my life! My daughter Liliana is the most joyful
						little girl! She is my biggest blessing, and I thank God
						every day for these two amazing and inspiring
						individuals!
					</p>
					<p className='mb-4'>
						I have been a licensed cosmetologist in Concord, NC
						since 2009. I am passionate about helping women feel and
						look beautiful by providing luxury services in a laid
						back and friendly environment. I’m proud to say that I’m
						able to deliver that experience at Graced Studio.
					</p>
					<p className='mb-4'>
						I specialize in color and extensions, and utilize both
						to help my guests achieve their dream hair! Over ten
						years ago, I discovered the life changing confidence
						boost hair extensions invoke. Since then, it has been my
						goal to help other women experience the magic of
						extensions!
					</p>
					<p className='mb-4'>
						When I’m not giving my guests the hair of their dreams,
						I am teaching other stylists around the US how to
						enhance their service menu through the art of hair
						extensions. I am proud to be an educator for Laced Hair
						Extensions. Not only do I have the opportunity to travel
						around the US teaching all things extensions, I am able
						to meet and connect with so many talented stylists!
					</p>
					<p className='mb-4'>
						Not only do I enjoy teaching other stylists, I love
						being a student! I am an education junkie and am always
						looking to enhance my skills and knowledge.
					</p>
					<p className='mb-4'>
						During my down time, I spend as much time with my family
						as possible. We enjoy spending time in the mountains -
						you can typically find us fly fishing in the rivers, or
						visiting all the waterfalls. We have three dogs and a
						cat, and sometimes I feel like we run a small zoo! I am
						so grateful for the life I live, and I thank God every
						day for bringing me so much joy!
					</p>
					<p className='mb-4'>
						I want to share my joy and passion with you! Whether you
						are looking to book an appointment, or inquire about
						extension education, I’d love to connect with you!
					</p>
					<div className='flex flex-col md:flex-row justify-center items-center pt-6'>
						<Button href='/booking/appointment'>
							Appointments
						</Button>
						<Button href='/education'>Classes</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
