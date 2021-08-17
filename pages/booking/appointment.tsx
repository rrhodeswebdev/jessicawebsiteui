import React from 'react';
import Heading from '../../components/content/Heading';
import AppointmentForm from '../../components/forms/AppointmentForm';

const AppointmentPage: React.FC = () => {
	return (
		<section className='container mx-auto max-w-6xl'>
			<Heading title='Request Appointment' />
			<div className='mb-8'>
				<p className='text-center font-light'>
					Thanks so much for your interest in booking an appointment
					with me! Please fill out the form below and let me know
					which service/s you are interested in! I will be in touch
					soon to confirm your appointment. I look forward to seeing
					you soon!
				</p>
			</div>
			<div>
				<AppointmentForm />
			</div>
		</section>
	);
};

export default AppointmentPage;
