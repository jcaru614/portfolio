import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({ title, description, images, skills, link, className }) => {
	return (
		<a href={link} target='_blank' rel='noopener noreferrer' className={`block ${className}`}>
			<div className='p-6 shadow-lg hover:bg-primary hover:shadow-xl hover:rounded-lg transition-all duration-300 max-w-xl mx-auto mb-6 min-h-[350px] flex'>
				{/* Image Carousel on the Left */}
				<div className='w-1/3 pr-4'>
					<Carousel
						showThumbs={false}
						infiniteLoop={true}
						autoPlay={true}
						interval={3000}
						transitionTime={500}
						showArrows={false}
						showIndicators={false}
						showStatus={false}
					>
						{images.map((image, index) => (
							<div key={index}>
								<Image
									src={image}
									alt={title}
									width={400}
									height={300}
									className='w-full h-full object-cover rounded-lg'
								/>
							</div>
						))}
					</Carousel>
				</div>

				{/* Text Content on the Right */}
				<div className='flex-1'>
					<div className='flex justify-between items-center mb-4'>
						<div className='flex items-center'>
							<h3 className='text-xl font-bold text-textPrimary hover:text-secondary'>{title}</h3>
							<FaExternalLinkAlt className='ml-2 text-secondary' />
						</div>
					</div>
					<p className='text-textSecondary mb-4 text-left'>{description}</p>

					{/* Skills section at the bottom */}
					<div className='flex flex-wrap gap-2'>
						{skills.map((skill, index) => (
							<span key={index} className='bg-secondary text-black px-3 py-1 rounded-full'>
								{skill}
							</span>
						))}
					</div>
				</div>
			</div>
		</a>
	);
};

export default ProjectCard;
