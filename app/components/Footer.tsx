'use client';

import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';

// Dynamically import icons with a fallback to avoid "undefined" errors
const Linkedin = dynamic(
  () => import('lucide-react').then((mod) => mod.Linkedin),
  { ssr: false }
);
const Mail = dynamic(() => import('lucide-react').then((mod) => mod.Mail), {
  ssr: false,
});
const BookOpen = dynamic(
  () => import('lucide-react').then((mod) => mod.BookOpen),
  { ssr: false }
);

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-6 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* LinkedIn Link  */}
          <a
            href="https://www.linkedin.com/in/sravanthi-reddy-8b977614a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin size={20} />
          </a>

          {/* Medium Link  */}
          <a
            href="https://medium.com/@sravsm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <span className="sr-only">Medium</span>
            <BookOpen size={20} />
          </a>

          {/* Email Link  */}
          <a
            href="mailto:sravanthireddy9963@gmail.com"
            className="text-zinc-400 hover:text-zinc-600 transition-colors"
          >
            <span className="sr-only">Email</span>
            <Mail size={20} />
          </a>
        </div>

        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500">
            &copy; {new Date().getFullYear()} Sravanthi Reddy. Software
            Development Engineer II @ Optmyzr. [cite: 1, 9, 10]
          </p>
        </div>
      </div>
    </footer>
  );
}
