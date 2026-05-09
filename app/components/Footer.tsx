'use client';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/sravanthi-reddy-8b977614a" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          
          {/* Medium Icon (Book Icon) */}
          <a 
            href="https://medium.com/@sravsm" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 transition-colors dark:hover:text-white"
          >
            <span className="sr-only">Medium</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
          
          {/* Email Icon */}
          <a 
            href="mailto:sravanthireddy9963@gmail.com" 
            className="text-zinc-400 hover:text-red-500 transition-colors"
          >
            <span className="sr-only">Email</span>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
        
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} Sravanthi Reddy[cite: 1]. Software Development Engineer II @ Optmyzr[cite: 2, 10].
          </p>
        </div>
      </div>
    </footer>
  );
}