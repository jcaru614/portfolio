import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({ title, description, images, skills, link, imageSize, github }) => {
  const width = imageSize?.width || 200;
  const height = imageSize?.height || 400;

  return (
    <div
      onClick={() => window.open(link, '_blank')}
      className='cursor-pointer w-full flex flex-col items-start gap-4 p-6 rounded-lg shadow-xl bg-background hover:bg-primary hover:shadow-2xl transition-all duration-300'
    >
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-2 text-textPrimary hover:text-secondary'>
          <h3 className='text-2xl font-bold leading-none'>{title}</h3>
          <FiExternalLink size={20} />
        </div>

        {github && (
          <a
            href={github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-textPrimary hover:text-secondary transition-colors duration-200'
            title='View GitHub'
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={25} />
          </a>
        )}
      </div>

      <div className='w-full max-w-full'>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          transitionTime={600}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className='flex justify-center items-center'
              style={{
                width: '100%',
                maxWidth: `${width}px`,
                height: `${height}px`,
                margin: '0 auto',
              }}
            >
              <Image
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                width={width}
                height={height}
                className='object-contain rounded-lg'
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className='w-full text-left'>
        <p className='text-textSecondary text-base leading-relaxed mb-4'>{description}</p>

        <div className='flex flex-wrap gap-2'>
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className='bg-secondary text-background px-3 py-1 rounded-full text-sm font-medium'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
