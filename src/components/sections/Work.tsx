import { ArrowUpRight, Code2 } from 'lucide-react';
import { projects } from '@/data/content';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Tag } from '@/components/ui/Tag';
import { Reveal } from '@/components/ui/Reveal';

/** Renders the selected work section with project highlights. */
export const Work = () => {
  return (
    <section
      id="work"
      className="max-w-5xl mx-auto px-6 md:px-10 py-28 md:pl-21"
    >
      <Eyebrow>selected work</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl mb-14 text-balance">
        Things I've built recently.
      </h2>

      <div className="flex flex-col">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 70}
            className="group gutter border-t border-line py-8 md:py-10 grid md:grid-cols-12 gap-4 md:gap-8"
            data-line={project.index}
          >
            <h3 className="md:col-span-4 font-display text-2xl md:text-3xl group-hover:text-amber transition-colors">
              {project.title}
            </h3>

            <div className="md:col-span-6">
              <p className="text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 flex md:flex-col items-start gap-4 md:items-end md:text-right">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-amber transition-colors"
                >
                  Live <ArrowUpRight size={14} />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-muted hover:text-amber transition-colors"
                >
                  <Code2 size={14} /> Code
                </a>
              )}
            </div>
          </Reveal>
        ))}
        <div className="border-t border-line" />
      </div>
    </section>
  );
};
