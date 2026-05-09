import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Import it here

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Your Name | Software Architect',
  description:
    'Personal portfolio and blog covering system design, AI, and quantum tech.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
          {children}
        </main>
        <Footer /> {/* 2. Place it here */}
      </body>
    </html>
  );
}
