import { socials } from '@/data/content';

/** Renders the footer with copyright information and social links. */
export const Footer = () => {
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} — Karunakaran Selvam
          </p>
          <p className="font-mono text-xs text-muted">
            built with React, Vite &amp; Tailwind
          </p>
        </div>
        <ul className="flex items-center gap-5">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted hover:text-amber transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
