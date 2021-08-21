import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitFormData } from '../../lib/forms';

interface FormData {
	email: string;
	phone: string;
	firstname: string;
	lastname: string;
	appointment_preferred_time: string;
	appointment_request_service: string;
	message: string;
}

const AppointmentForm: React.FC = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormData>();
	const formId = '6336fa11-d394-4327-9735-6dfe287c716c';
	const context = {
		pageUri: 'https://jesserhodes.style/booking/appointment',
		pageName: 'Appointment Request',
	};

	const onSubmit = (data: FormData) => {
		const formData = { ...data, appointment_request_status: 'pending' };

		submitFormData(formData, formId, context);
		reset();
		setSuccessMessage(
			'Thank you for your appointment request. Please note this request is not a confirmed appointment. I will review your submission and be in to confirm within 48 hours.'
		);
	};

	return (
		<form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
			{successMessage && (
				<div className='mb-4 p-4 bg-secondary font-light italic text-sm text-center'>
					<p>{successMessage}</p>
				</div>
			)}
			<div className='flex flex-col md:flex-row justify-between'>
				<div className='flex flex-col mb-4 md:pr-4 w-full'>
					<label htmlFor='email' className='font-light mb-1'>
						Email
					</label>
					<input
						type='email'
						className='border border-secondary p-2 outline-none font-light'
						{...register('email', { required: true })}
					/>
					{errors.email && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
				<div className='flex flex-col mb-4 md:pl-4 w-full'>
					<label htmlFor='phone' className='font-light mb-1'>
						Phone Number
					</label>
					<input
						type='tel'
						className='border border-secondary p-2 outline-none font-light'
						{...register('phone', { required: true })}
					/>
					{errors.phone && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
			</div>
			<div className='flex flex-col md:flex-row justify-between'>
				<div className='flex flex-col mb-4 md:pr-4 w-full'>
					<label htmlFor='firstname' className='font-light mb-1'>
						First Name
					</label>
					<input
						type='text'
						className='border border-secondary p-2 outline-none font-light'
						{...register('firstname', { required: true })}
					/>
					{errors.firstname && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
				<div className='flex flex-col mb-4 md:pl-4 w-full'>
					<label htmlFor='lastname' className='font-light mb-1'>
						Last Name
					</label>
					<input
						type='text'
						className='border border-secondary p-2 outline-none font-light'
						{...register('lastname', { required: true })}
					/>
					{errors.lastname && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
			</div>
			<div className='flex flex-col md:flex-row justify-between'>
				<div className='flex flex-col mb-4 md:pr-4 w-full'>
					<label
						htmlFor='reason_of_contact'
						className='font-light mb-1'
					>
						Preferred Time of Day
					</label>
					<select
						className='border border-secondary p-2 outline-none font-light'
						{...register('appointment_preferred_time', {
							required: true,
						})}
					>
						<option value='' defaultValue=''></option>
						<option value='Morning'>Morning</option>
						<option value='Afternoon'>Afternoon</option>
						<option value='Evening'>Evening</option>
					</select>
					{errors.appointment_preferred_time && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
				<div className='flex flex-col mb-4 md:pl-4 w-full'>
					<label
						htmlFor='reason_of_contact'
						className='font-light mb-1'
					>
						Service
					</label>
					<select
						className='border border-secondary p-2 outline-none font-light'
						{...register('appointment_request_service', {
							required: true,
						})}
					>
						<option value='' defaultValue=''></option>
						<option value='Styling'>Styling</option>
						<option value='Color'>Color</option>
						<option value='Extensions'>Extensions</option>
					</select>
					{errors.appointment_request_service && (
						<p className='text-red-400 font-light'>
							This field is required
						</p>
					)}
				</div>
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='message' className='font-light mb-1'>
					Message
				</label>
				<textarea
					className='border border-secondary p-2 outline-none font-light resize-none'
					rows={5}
					{...register('message', { required: true })}
				></textarea>
				{errors.message && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div className='mb-6'>
				<p className='font-light text-xs italic mb-1'>
					*Submitting this form does not guarantee an appointment with
					the date and time requested. All appointments have to be
					confirmed by Jesse Rhodes.
				</p>
				<p className='font-light text-xs italic mb-1'>
					*Jesse Rhodes needs the contact information you provide to
					her to contact you about the products and services offered.
					You may unsubscribe from these communications at any time.
				</p>
			</div>
			<div className='flex justify-center'>
				<button className='text-white bg-primary hover:bg-accent w-full md:w-1/4 p-2 mb-6 transition-colors text-center uppercase font-light'>
					Submit
				</button>
			</div>
		</form>
	);
};

export default AppointmentForm;
