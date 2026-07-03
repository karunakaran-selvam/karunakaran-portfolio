import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { profile } from '@/data/content';
import heroImage from '@/assets/hero.png';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

const ROLES = [
  'Senior Software Engineer',
  'React Developer',
  'TypeScript Enthusiast',
  'UI/UX Advocate',
  'UI Performance Specialist',
];

const HERO_STATS = [
  {
    title: '6+ Years',
    label: 'Experience',
    detail: 'Enterprise web technologies',
  },
  {
    title: 'React / Next JS Expert',
    label: 'TypeScript / JavaScript Focused',
    detail: 'Modern UI',
  },
  {
    title: 'Enterprise Apps',
    label: 'Healthcare Domain',
    detail: 'Product delivery',
  },
];

/** Renders the hero section with the introductory content and animated role text. */
export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 40 : 80;
    const timeout = window.setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          window.setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 md:px-10 pt-16 bg-[#05060d]"
    >
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top_left,rgba(255,184,92,0.12),transparent_30%)] pointer-events-none" />
      <div className="max-w-6xl mx-auto grid min-h-[calc(90vh-3.5rem)] gap-6 items-center lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:items-end py-12">
        <div className="space-y-6 lg:space-y-10">
          <Reveal delay={150}>
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-amber/80">
              // Senior Software Engineer
            </p>
          </Reveal>

          <Reveal delay={250}>
            <h1 className="font-display font-semibold tracking-[-0.04em] text-[clamp(3.75rem,7vw,6rem)] leading-[0.85] text-white">
              Karunakaran
              <br />
              <span className="text-amber">Selvam</span>
            </h1>
          </Reveal>

          <Reveal delay={350}>
            <p className="font-mono text-lg md:text-2xl text-muted mt-2 leading-tight">
              {text}
              <span className="blink text-amber">|</span>
            </p>
          </Reveal>

          <Reveal delay={450}>
            <p className="max-w-xl text-muted leading-relaxed tracking-[0.01em]">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={550}>
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Button
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('work')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-md"
              >
                Explore Projects
              </Button>

              <Button
                className="rounded-md"
                variant="ghost"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let&apos;s Connect
              </Button>
            </div>
          </Reveal>

          <Reveal delay={700}>
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-2 mt-10">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.title}
                  className="rounded-lg border border-white/10 bg-[#0d1324]/70 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                >
                  <p className="font-mono text-sm text-amber mb-1">
                    {stat.title}
                  </p>
                  <p className="font-semibold text-base text-white leading-snug">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xs text-muted">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={850}>
          <div className="hidden lg:flex relative justify-center lg:justify-end">
            <div className="relative w-full max-w-120 overflow-hidden bg-[#05060d] before:absolute before:inset-0 before:-z-10 before:rounded-4xl before:bg-linear-to-br before:from-amber/10 before:via-transparent before:to-slate-950/15">
              <img
                src={heroImage}
                alt={profile.name}
                className="relative w-full max-h-155 min-h-105 object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-8 flex justify-center text-muted">
        <ArrowDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
};
