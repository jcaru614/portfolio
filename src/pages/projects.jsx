import React from 'react';
import { PageTitle } from '@/components';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'AfterHoursIQ',
      description:
        'An AI-powered tool that analyzes earnings reports and assigns a buy/hold/sell rating to help traders make after-hours decisions.',
      images: ['/images/afterHoursIQ1.png', '/images/afterHoursIQ2.png'],
      skills: ['Next.js', 'TypeScript', 'OpenAI', 'Puppeteer', 'Tailwind'],
      github: 'https://github.com/jcaru614/afterhoursiq',
      imageSize: {
        width: 400,
        height: 360,
      },
    },
    {
      title: 'Neural Gazette',
      description:
        'An AI-powered news platform that delivers accurate, unbiased headlines by collecting and analyzing stories in real time.',
      images: ['/images/ng1.png', '/images/ng2.png', '/images/ng3.png'],
      skills: ['React', 'TypeScript', 'Next.js', 'Vercel', 'Prisma', 'sql'],
      link: 'https://neuralgazette.com/',
      github: 'https://github.com/jcaru614/neuralgazette',
      imageSize: {
        width: 260,
        height: 360,
      },
    },
    {
      title: 'SpotBack',
      description:
        'A peer-powered parking app that connects drivers to nearby spots in real time as others leave, making parking seamless.',
      images: ['/images/spotback1.png', '/images/spotback2.png', '/images/spotback3.png'],
      skills: ['React Native', 'Typescript', 'Node.js', 'Express', 'noSql'],
      link: 'https://www.youtube.com/shorts/TbP9fTLoWOI',
      github: 'https://github.com/Spotback/spotback',
      imageSize: {
        width: 160,
        height: 360,
      },
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col items-center justify-center text-center p-4'
    >
      <PageTitle title='Projects' />
      <div className='w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            skills={project.skills}
            link={project.link}
            imageSize={project.imageSize}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
