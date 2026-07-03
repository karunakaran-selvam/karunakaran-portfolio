import { profile, skills } from '@/data/content';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Tag } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';

/** Renders the about section with profile highlights and skill groups. */
export const About = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:pl-21"
    >
      <Reveal>
        <Eyebrow>about</Eyebrow>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3">
            <p className="font-display text-2xl md:text-3xl leading-snug text-balance">
              I'm a {profile.role.toLowerCase()} based{' '}
              {profile.location.split('·')[0].trim()}, with over six years of
              experience building enterprise web applications using React and
              the modern JavaScript ecosystem.
            </p>

            <p className="text-muted mt-6 leading-relaxed max-w-lg">
              My expertise lies in designing scalable frontend architectures,
              developing reusable component libraries, integrating REST APIs,
              optimizing application performance, and maintaining high code
              quality through testing and best practices.
            </p>

            <p className="text-muted mt-6 leading-relaxed max-w-lg">
              I enjoy transforming complex business requirements into intuitive
              user experiences while writing clean, maintainable, and reusable
              code.
            </p>
          </div>

          <div className="md:col-span-2 space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <p className="font-mono text-xs text-muted mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};
