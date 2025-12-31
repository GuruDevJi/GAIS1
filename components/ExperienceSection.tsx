
import React from 'react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechFlow Systems',
    role: 'Senior Frontend Engineer',
    period: '2021 - Present',
    description: [
      'Led the development of a high-performance React dashboard, improving load times by 40%.',
      'Architected a reusable component library used across 12 product lines.',
      'Mentored junior developers and introduced modern CI/CD practices.'
    ],
    technologies: ['React', 'TypeScript', 'Tailwind', 'Next.js']
  },
  {
    id: '2',
    company: 'Digital Horizon',
    role: 'Full Stack Developer',
    period: '2018 - 2021',
    description: [
      'Built and maintained complex APIs serving over 1M monthly active users.',
      'Refactored legacy monolith into microservices, enhancing system reliability.',
      'Implemented real-time data visualization using D3.js.'
    ],
    technologies: ['Node.js', 'PostgreSQL', 'AWS', 'Vue.js']
  }
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Career Journey</span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Professional Experience</h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            My professional background spans over half a decade of building digital solutions.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:pl-0">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="mb-16 relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-3">{exp.role}</h3>
                  <p className="text-lg font-medium text-slate-600">{exp.company}</p>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <ul className="space-y-3">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex items-start text-slate-600 leading-relaxed">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-slate-300 rounded-full flex-shrink-0"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.technologies.map(tech => (
                      <span key={tech} className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-500 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
