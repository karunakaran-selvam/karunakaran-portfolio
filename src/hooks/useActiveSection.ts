import { useEffect, useState } from 'react';

/** Tracks the currently active section based on viewport visibility. */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const observedIds = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    /** Observes any section elements that have not been registered yet. */
    const observeMissing = () => {
      ids.forEach((id) => {
        if (observedIds.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observedIds.add(id);
        }
      });
    };

    observeMissing();

    const interval = window.setInterval(() => {
      if (observedIds.size === ids.length) {
        window.clearInterval(interval);
        return;
      }

      observeMissing();
    }, 250);

    return () => {
      observer.disconnect();
      window.clearInterval(interval);
    };
  }, [ids]);

  return active;
};
