import { cn } from '@/utils/cn';

interface ButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  variant?: 'primary' | 'ghost';
}

/** Renders a shared call-to-action link with primary or ghost styling. */
export const Button = ({
  variant = 'primary',
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <a
      className={cn(
        'inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
        variant === 'primary' &&
          'bg-amber text-ink hover:bg-[#ffb75c] active:scale-[0.98]',
        variant === 'ghost' &&
          'border border-line text-text hover:border-amber hover:text-amber',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
