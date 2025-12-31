
import React, { useState } from 'react';
import { refineProfessionalBio } from '../services/geminiService';

const BioRefiner: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRefine = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError('');
    try {
      const refined = await refineProfessionalBio(input);
      setOutput(refined);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
      <div className="flex items-center space-x-2 mb-6">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.3 1.047a1 1 0 01.897.95V4.31a8.001 8.001 0 011.602 1.488l2.307-2.307a1 1 0 111.414 1.414l-2.307 2.307a8.001 8.001 0 011.488 1.602h2.31a1 1 0 110 2H16.69a8.001 8.001 0 01-1.488 1.602l2.307 2.307a1 1 0 11-1.414 1.414l-2.307-2.307a8.001 8.001 0 01-1.602 1.488v2.31a1 1 0 11-2 0v-2.31a8.001 8.001 0 01-1.602-1.488l-2.307 2.307a1 1 0 11-1.414-1.414l2.307-2.307A8.001 8.001 0 013.31 11H1a1 1 0 110-2h2.31a8.001 8.001 0 011.488-1.602L2.49 5.09a1 1 0 011.414-1.414l2.307 2.307A8.001 8.001 0 017.801 4.5V2a1 1 0 011-1h2.5zM10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900">AI Bio Refiner</h3>
      </div>

      <p className="text-sm text-slate-500 mb-4">
        Need help writing your professional summary? Drop some rough notes below and let AI polish it for you.
      </p>

      <div className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 5 years exp, love react, worked at tech co as senior dev, built scalable apps..."
          className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-slate-700"
        />
        
        <button
          onClick={handleRefine}
          disabled={loading || !input.trim()}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center"
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Refine my Bio'}
        </button>

        {error && (
          <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        {output && (
          <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-200 relative">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Suggested Version</h4>
            <p className="text-slate-700 italic">"{output}"</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(output);
              }}
              className="absolute top-4 right-4 text-slate-400 hover:text-blue-600"
              title="Copy to clipboard"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BioRefiner;
