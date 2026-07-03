import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/content';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/** Renders the call-to-action section for contacting the portfolio owner. */
export const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:pl-21"
    >
      <Reveal>
        <Eyebrow>contact</Eyebrow>
        <h2 className="font-display text-4xl md:text-6xl text-balance max-w-2xl leading-tight">
          Let's Build Something Great Together
        </h2>

        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 mt-10 font-mono text-lg md:text-xl text-amber"
        >
          {profile.email}
          <ArrowUpRight
            size={20}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <p className="font-mono text-xs text-muted mt-6">{profile.location}</p>
      </Reveal>
    </section>
  );
};
