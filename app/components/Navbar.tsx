import Link from 'next/link';

export default function Navbar() {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Writing', path: '/writing' },
    { name: 'Aspirations', path: '/aspirations' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-zinc-900 transition-opacity hover:opacity-80"
        >
          Sravs
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
