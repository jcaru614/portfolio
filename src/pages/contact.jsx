import React, { useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [status, setStatus] = useState('');

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setStatus('Sending...');

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					from: formData.email,
					subject: `Contact form submission from ${formData.name}`,
					text: formData.message,
				}),
			});

			if (res.status === 200) {
				setStatus('Message sent successfully!');
				setFormData({ name: '', email: '', message: '' });
			} else {
				setStatus('Failed to send message.');
			}
		} catch (error) {
			console.error(error);
			setStatus('Failed to send message.');
		}
	};

	return (
		<section
			id='contact'
			className='min-h-screen flex items-center justify-center text-center p-4'
		>
			<div className='max-w-lg w-full'>
				<h2 className='text-3xl font-bold text-textPrimary mb-8'>Send me a message!</h2>
				<p className='text-lg text-textSecondary mb-8'>
					Got a question or proposal, or just want to say hello? Go ahead.
				</p>
				<form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
					<div className='flex flex-col md:flex-row md:space-x-4'>
						<label className='flex flex-col flex-1'>
							<span className='text-lg text-textPrimary mb-2'>Your Name</span>
							<input
								type='text'
								name='name'
								value={formData.name}
								onChange={handleChange}
								placeholder='Enter your name'
								className='p-2 border border-borderColor rounded text-black placeholder-gray-500'
								required
							/>
						</label>
						<label className='flex flex-col flex-1'>
							<span className='text-lg text-textPrimary mb-2'>Email Address</span>
							<input
								type='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								placeholder='Enter your email address'
								className='p-2 border border-borderColor rounded text-black placeholder-gray-500'
								required
							/>
						</label>
					</div>
					<label className='flex flex-col'>
						<span className='text-lg text-textPrimary mb-2'>Your Message</span>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleChange}
							placeholder='Type your message here'
							rows='6'
							className='p-2 border border-borderColor rounded text-black placeholder-gray-500'
							required
						/>
					</label>
					<button
						type='submit'
						className='py-2 px-4 bg-primary text-white font-bold rounded hover:bg-secondary transition-colors duration-300'
					>
						Send Message
					</button>
					{status && <p className='text-sm text-textPrimary mt-2'>{status}</p>}
				</form>
			</div>
		</section>
	);
}
