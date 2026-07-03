import { cn } from '@/utils/cn';

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

/** Renders a small section label with a monospaced prefix. */
export const Eyebrow = ({ children, className }: EyebrowProps) => {
  return (
    <p
      className={cn(
        'font-mono text-xs tracking-wide text-muted mb-4 flex items-center gap-2',
        className
      )}
    >
      <span className="text-line">//</span> {children}
    </p>
  );
};
