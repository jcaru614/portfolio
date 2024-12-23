import React from 'react';
import { PageTitle } from '@/components';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Neural Gazette',
      description:
        'Neural Gazette is an artificial intelligence news network that provides users with accurate, unbiased news. We use AI to collect, analyze, and generate unbiased news articles.',
      images: ['/images/ng1.png', '/images/ng2.png', '/images/ng3.png'],
      skills: ['React', 'TypeScript', 'Next.js', 'Vercel', 'Prisma', 'sql'],
      link: 'https://neuralgazette.com/',
    },
    {
      title: 'SpotBack',
      description:
        'A web application that allows users to track their favorite artists and get notified about new releases and concerts.',
      images: ['/images/spotback1.png', '/images/spotback2.png', '/images/spotback3.png'],
      skills: ['React Native', 'Typescript', 'Node.js', 'Express', 'noSql'],
      link: 'https://www.youtube.com/shorts/TbP9fTLoWOI',
    },
  ];
  // make the images different aspects for iphone ipads or webviews
  // Include link to site or video and github
  return (
    <section
      id='projects'
      className='min-h-screen flex flex-col items-center justify-center text-center p-4'
    >
      <PageTitle title='Projects' />
      <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            skills={project.skills}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
