
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'p1',
    title: 'Nexus UI Kit',
    description: 'A comprehensive, accessible design system built for enterprise-grade React applications.',
    image: 'https://picsum.photos/seed/nexus/800/600',
    tags: ['React', 'Storybook', 'Framer Motion'],
    link: '#'
  },
  {
    id: 'p2',
    title: 'CryptoTrack Pro',
    description: 'Real-time cryptocurrency portfolio tracker with advanced charting and sentiment analysis.',
    image: 'https://picsum.photos/seed/crypto/800/600',
    tags: ['Next.js', 'D3.js', 'Tailwind'],
    link: '#'
  },
  {
    id: 'p3',
    title: 'SwiftPay API',
    description: 'A high-throughput payment gateway integration service focused on speed and security.',
    image: 'https://picsum.photos/seed/pay/800/600',
    tags: ['Go', 'PostgreSQL', 'Redis'],
    link: '#'
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Portfolio</span>
          <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  View Case Study
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
