import { experience } from '@/data/content';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Reveal } from '@/components/ui/Reveal';

/** Renders the experience timeline for past roles and accomplishments. */
export const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:pl-21"
    >
      <Eyebrow>experience</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl mb-14 text-balance">
        Where I've worked.
      </h2>

      <div className="space-y-10">
        {experience.map((exp, i) => (
          <Reveal
            key={exp.id}
            delay={i * 70}
            className="grid md:grid-cols-12 gap-2 md:gap-8"
          >
            <p className="md:col-span-3 font-mono text-xs text-muted pt-1">
              {exp.period}
            </p>
            <div className="md:col-span-9">
              <h3 className="font-display text-xl">
                {exp.role} <span className="text-muted">— {exp.org}</span>
              </h3>
              <p className="text-muted mt-2 leading-relaxed max-w-xl">
                {exp.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
