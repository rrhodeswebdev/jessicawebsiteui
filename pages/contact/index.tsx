import React from 'react';
import Heading from '../../components/content/Heading';
import SubHeading from '../../components/content/SubHeading';
import ContactForm from '../../components/forms/ContactForm';

const ContactPage: React.FC = () => {
	return (
		<div className='container mx-auto p-6 max-w-6xl'>
			<Heading title="Let's Connect" />
			<div className='mb-12'>
				<img src='/contact-header.jpeg' alt='Contact us header' />
			</div>
			<div className='flex flex-wrap flex-row w-full'>
				<div className='flex flex-col flex-1 pr-8'>
					<div className='mb-6'>
						<SubHeading title='Email' />
						<p className='font-light text-accent hover:underline'>
							<a href='mailto:jesse@jesserhodes.style'>
								jesse@jesserhodes.style
							</a>
						</p>
					</div>
					<div className='mb-6'>
						<SubHeading title='Phone' />
						<p className='font-light text-accent hover:underline'>
							<a href='tel:7047969365'>(704) 796-9365</a>
						</p>
					</div>
					<div className='mb-6'>
						<SubHeading title='Address' />
						<p className='font-light text-accent hover:underline'>
							<a
								href='https://goo.gl/maps/Rqg7wXzG18krgAeZ8'
								target='_blank'
							>
								CC & Company Salon & Spa
								<br />
								160 Manor Ave
								<br />
								Concord, NC 28025
							</a>
						</p>
					</div>
					<div className='mb-6'>
						<SubHeading title='Hours' />
						<p className='font-light text-accent'>Tuesday 10-1</p>
						<p className='font-light text-accent'>Wednesday 10-8</p>
						<p className='font-light text-accent'>Thursday 10-8</p>
						<p className='font-light text-accent'>Friday 9-4</p>
					</div>
				</div>
				<div className='flex flex-col flex-1'>
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
