
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            Building digital <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              experiences
            </span> that matter.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            I'm a passionate engineer focused on creating elegant solutions to complex problems. Welcome to my personal corner of the web.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#experience" className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
              View Experience
            </a>
            <a href="#contact" className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="relative hidden md:block">
          <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 transform hover:rotate-0 transition-transform duration-500">
            <img src="https://picsum.photos/800/800?grayscale" alt="Professional Portrait" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-xl animate-bounce-slow">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-slate-700">Available for new projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
