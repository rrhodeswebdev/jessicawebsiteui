import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { submitFormData } from '../../lib/forms';

interface FormData {
	email: string;
	firstname: string;
	lastname: string;
	reason_of_contact: string;
	message: string;
}

const ContactForm = () => {
	const [successMessage, setSuccessMessage] = useState('');

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const formId = 'a8dbe954-c457-41f1-8292-fd3b55fef13c';

	const context = {
		pageUri: 'https://graced.studio/contact',
		pageName: 'Contact',
	};

	const onSubmit = (data: FormData) => {
		submitFormData(data, formId, context);
		reset();
		setSuccessMessage(
			'Thank you for reaching out. I will be in touch with you as soon as possible.'
		);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{successMessage && (
				<div className='mb-4 p-4 bg-secondary font-light italic text-sm text-center'>
					<p>{successMessage}</p>
				</div>
			)}
			<div className='flex flex-col mb-4'>
				<label htmlFor='email' className='font-light mb-1'>
					Email
				</label>
				<input
					type='email'
					{...register('email', { required: true })}
					className='border border-secondary p-2 outline-none font-light'
				/>
				{errors.email && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='firstname' className='font-light mb-1'>
					First Name
				</label>
				<input
					type='text'
					{...register('firstname', { required: true })}
					className='border border-secondary p-2 outline-none font-light'
				/>
				{errors.firstname && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='lastname' className='font-light mb-1'>
					Last Name
				</label>
				<input
					type='text'
					{...register('lastname', { required: true })}
					className='border border-secondary p-2 outline-none font-light'
				/>
				{errors.lastname && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div className='flex flex-col mb-4'>
				<label htmlFor='reason_of_contact' className='font-light mb-1'>
					Reason of Contact
				</label>
				<select
					{...register('reason_of_contact', { required: true })}
					className='border border-secondary p-2 outline-none font-light'
				>
					<option value='' defaultValue=''></option>
					<option value='Appointments'>Appointments</option>
					<option value='Services'>Services</option>
					<option value='Education'>Education</option>
					<option value='Other'>Other</option>
				</select>
				{errors.reason_of_contact && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div className='flex flex-col mb-6'>
				<label htmlFor='message' className='font-light mb-1'>
					Message
				</label>
				<textarea
					{...register('message', { required: true })}
					className='border border-secondary p-2 outline-none font-light resize-none'
					rows={5}
				></textarea>
				{errors.message && (
					<p className='text-red-400 font-light'>
						This field is required
					</p>
				)}
			</div>
			<div>
				<button className='text-white bg-primary hover:bg-accent w-full p-2 mb-6 transition-colors text-center uppercase font-light'>
					Submit
				</button>
			</div>
			<div>
				<p className='font-light text-xs italic'>
					*Jesse Rhodes needs the contact information you provide to
					her to contact you about the products and services offered.
					You may unsubscribe from these communications at any time.
				</p>
			</div>
		</form>
	);
};

export default ContactForm;
