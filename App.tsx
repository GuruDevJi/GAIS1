
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import BioRefiner from './components/BioRefiner';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <section id="about" className="py-24 bg-slate-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">About Me</span>
                <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-6">Passionate Engineer & Lifelong Learner</h2>
                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                  <p>
                    I am a software engineer with a deep passion for clean code and user-centric design. My journey in tech started with a simple "Hello World" and has evolved into building large-scale applications that solve real-world problems.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="text-2xl font-bold text-blue-600">5+</div>
                      <div className="text-sm text-slate-500">Years Experience</div>
                    </div>
                    <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <div className="text-2xl font-bold text-blue-600">20+</div>
                      <div className="text-sm text-slate-500">Projects Launched</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <BioRefiner />
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection />
        
        <ProjectsSection />

        <section id="skills" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Skills & Stack</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mt-2">Technical Proficiency</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js'] },
                { title: 'Backend', skills: ['Node.js', 'Go', 'Python', 'PostgreSQL', 'Redis'] },
                { title: 'Tools', skills: ['Docker', 'AWS', 'Terraform', 'Git', 'CI/CD'] },
                { title: 'Design', skills: ['Figma', 'UI/UX Principles', 'Prototyping', 'Branding'] }
              ].map((category) => (
                <div key={category.title} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li key={skill} className="text-slate-600 flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Get in touch</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-8">Ready to start your next project? Let's talk.</h2>
              <p className="text-slate-400 text-xl mb-12">
                I'm always open to discussing new opportunities, creative ideas, or being part of your visions.
              </p>
              
              <div className="flex flex-wrap gap-8 items-center">
                <a href="mailto:hello@personal.me" className="text-2xl font-medium hover:text-blue-400 transition-colors flex items-center group">
                  hello@personal.me
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                
                <div className="flex space-x-6">
                  {['Twitter', 'GitHub', 'LinkedIn'].map((platform) => (
                    <a key={platform} href="#" className="text-slate-400 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p>© {new Date().getFullYear()} All Rights Reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
