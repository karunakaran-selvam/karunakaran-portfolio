/** Combines conditional class names into a single string. */
export const cn = (...classes: Array<string | false | null | undefined>) => {
  return classes.filter(Boolean).join(' ');
};
