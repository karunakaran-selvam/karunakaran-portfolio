import { useMemo, useState } from 'react';
import { DownloadIcon, Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { profile } from '@/data/content';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

/** Renders the sticky navigation header and mobile menu. */
export const Nav = () => {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => NAV_ITEMS.map((n) => n.id), []);
  const active = useActiveSection(sectionIds);

  /** Scrolls to a section and closes the mobile navigation. */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-ink/80 backdrop-blur-md">
      <nav className="max-w-5xl mx-auto px-6 md:px-10 flex items-center justify-between h-14">
        <button
          onClick={() => scrollTo('home')}
          className="font-mono text-sm text-amber tracking-tight cursor-pointer"
        >
          Karunakaran<span className="text-muted">.Selvam</span>
        </button>

        <div className="hidden md:flex items-center gap-2">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    'font-mono text-xs px-3 py-1.5 rounded-md cursor-pointer transition-colors',
                    active === item.id
                      ? 'text-amber bg-surface-2'
                      : 'text-muted hover:text-amber'
                  )}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <Button
            href={profile.resume}
            download
            variant="outline"
            className="flex bg-surface-2 font-mono text-xs p-3 py-1.5 border-none! hover:bg-surface-2! rounded-md cursor-pointer transition-colors items-center justify-center gap-2"
          >
            <span className="text-amber pt-1">Resume</span>
            <DownloadIcon className=" text-amber" size={15} />
          </Button>
        </div>

        <button
          className="md:hidden text-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col border-t border-line px-6 py-3 gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={cn(
                  'font-mono text-xs py-2 w-full text-left rounded-md transition-colors',
                  active === item.id
                    ? 'text-amber bg-surface-2'
                    : 'text-muted hover:text-amber hover:bg-white/5'
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <Button
              href={profile.resume}
              download
              className="w-full justify-center"
            >
              Download Resume
            </Button>
          </li>
        </ul>
      )}
    </header>
  );
};
