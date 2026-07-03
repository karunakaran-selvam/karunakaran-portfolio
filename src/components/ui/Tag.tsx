/** Renders a small pill-style label for skills and technologies. */
export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-surface-2 text-muted border border-line">
      {children}
    </span>
  );
};
