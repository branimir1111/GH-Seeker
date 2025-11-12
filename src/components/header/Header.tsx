import { ModeToggle } from '@/components';

export default function Header() {
  return (
    <nav className="grid place-items-center shadow-lg border-b p-4">
      <header className="w-full max-w-6xl flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-3">
          <img src="/search.svg" alt="GH Seeker" className="h-8" />
          <span>GH Seeker</span>
        </h1>
        <ModeToggle />
      </header>
    </nav>
  );
}
