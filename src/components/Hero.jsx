import React, { useState } from 'react';
import AnimatedNetworkBG from './AnimatedNetworkBG';
import Icon from './Icon';
import profile from '../data/profile';
import projects from '../data/projects';
import skills from '../data/skills';
import { certifications } from '../data/education';

const socialLinks = [
    { href: profile.contact.linkedin, label: 'LinkedIn profile', icon: 'linkedin', external: true },
    { href: profile.contact.github, label: 'GitHub repository', icon: 'github', external: true },
    { href: profile.contact.emailHref, label: `Email ${profile.contact.email}`, icon: 'mail' },
    { href: profile.contact.phoneHref, label: `Call ${profile.contact.phone}`, icon: 'phone' },
];

const Hero = () => {
    const [photoOk, setPhotoOk] = useState(true);
    // Highlights are counted from the resume data, so they stay accurate.
    const highlights = [
        { value: profile.currentRole.title, label: `${profile.currentRole.company} · since ${profile.currentRole.since}` },
        { value: 'BCA', label: 'Graduate · 2023 – 2026' },
        { value: String(projects.length), label: 'Analytics projects' },
        { value: String(certifications.length), label: 'Udemy certifications' },
    ];

    return (
        <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
            {/* Background: gradient glow + subtle grid + existing network lines */}
            <div className="absolute inset-0 hero-bg" aria-hidden="true" />
            <div className="absolute inset-0 hero-grid opacity-40" aria-hidden="true" />
            <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true">
                <AnimatedNetworkBG />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
                    <div className="animate-fade-in">
                        <p className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 text-xs sm:text-sm font-medium mb-6">
                            <span className="relative flex w-2 h-2">
                                <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 motion-safe:animate-ping" />
                                <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                            </span>
                            Currently {profile.currentRole.title} at {profile.currentRole.company}
                        </p>

                        <h1 id="hero-title" className="font-space text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                            {profile.name}
                        </h1>

                        <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-base sm:text-lg font-medium">
                            {profile.roles.map((role, i) => (
                                <span key={role} className="flex items-center gap-3">
                                    <span className="bg-gradient-to-r from-neonPurple to-neonGreen bg-clip-text text-transparent">{role}</span>
                                    {i < profile.roles.length - 1 && <span className="text-neonCyan/60" aria-hidden="true">/</span>}
                                </span>
                            ))}
                        </p>
                        <p className="sr-only">{profile.title}</p>

                        <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">{profile.tagline}</p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <a href="#projects" className="btn btn-primary">
                                View Projects
                                <Icon name="arrowRight" className="w-4 h-4" />
                            </a>
                            <a href={`${process.env.PUBLIC_URL}/${profile.resumeFile}`} download className="btn btn-secondary">
                                <Icon name="download" className="w-4 h-4" />
                                Download Resume
                            </a>
                            <a href="#contact" className="btn btn-ghost">
                                Contact Me
                            </a>
                        </div>

                        <ul className="mt-8 flex items-center gap-3" aria-label="Contact and social links">
                            {socialLinks.map((s) => (
                                <li key={s.icon}>
                                    <a
                                        href={s.href}
                                        aria-label={s.label}
                                        title={s.label}
                                        {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                        className="grid place-items-center w-11 h-11 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-neonPurple/60 hover:bg-neonCyan/15 transition-colors"
                                    >
                                        <Icon name={s.icon} className="w-5 h-5" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Profile card */}
                    <div className="animate-fade-in anim-delay-200">
                        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-darkBlue/90 to-darkBg/90 p-6 sm:p-8 shadow-2xl shadow-neonCyan/10">
                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-neonCyan/20 rounded-full blur-3xl" aria-hidden="true" />
                            <div className="relative flex items-center gap-4">
                                {photoOk ? (
                                    <img
                                        src={`${process.env.PUBLIC_URL}/${profile.photoFile}`}
                                        alt={`Photo of ${profile.name}`}
                                        onError={() => setPhotoOk(false)}
                                        className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-neonCyan/60 shadow-lg shadow-neonCyan/40 shrink-0"
                                    />
                                ) : (
                                    <div
                                        className="grid place-items-center w-20 h-20 rounded-2xl bg-gradient-to-br from-neonCyan via-neonPurple to-neonGreen text-white font-space text-2xl font-bold shadow-lg shadow-neonCyan/40 shrink-0"
                                        aria-hidden="true"
                                    >
                                        {profile.initials}
                                    </div>
                                )}
                                <div>
                                    <p className="font-space text-xl font-semibold text-white">{profile.name}</p>
                                    <p className="text-sm text-gray-400">BCA Graduate · Data Analyst Intern</p>
                                </div>
                            </div>
                            <dl className="relative mt-6 space-y-4 text-sm">
                                <div className="flex gap-3">
                                    <dt className="text-neonPurple mt-0.5"><Icon name="briefcase" className="w-4 h-4" title="Current role" /></dt>
                                    <dd className="text-gray-300">{profile.currentRole.title}, {profile.currentRole.company}</dd>
                                </div>
                                <div className="flex gap-3">
                                    <dt className="text-neonPurple mt-0.5"><Icon name="graduation" className="w-4 h-4" title="Education" /></dt>
                                    <dd className="text-gray-300">BCA, Shri Ramswaroop Memorial University, Lucknow</dd>
                                </div>
                                <div className="flex gap-3">
                                    <dt className="text-neonPurple mt-0.5"><Icon name="code" className="w-4 h-4" title="Core stack" /></dt>
                                    <dd className="text-gray-300">Python · SQL · Excel · Power BI</dd>
                                </div>
                                <div className="flex gap-3">
                                    <dt className="text-neonPurple mt-0.5"><Icon name="globe" className="w-4 h-4" title="Languages" /></dt>
                                    <dd className="text-gray-300">{profile.languages.join(', ')}</dd>
                                </div>
                            </dl>
                            <div className="relative mt-6 pt-6 border-t border-white/10">
                                <p className="text-xs uppercase tracking-[0.16em] text-gray-500 mb-3">Skill areas</p>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((s) => (
                                        <span key={s.category} className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-300">
                                            {s.category}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Highlights strip — values derived from resume data */}
                <ul className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 animate-fade-in anim-delay-300" aria-label="Highlights">
                    {highlights.map((h) => (
                        <li key={h.label} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 sm:px-5 sm:py-5">
                            <p className="font-space text-lg sm:text-2xl font-bold text-white leading-tight">{h.value}</p>
                            <p className="mt-1 text-xs sm:text-sm text-gray-400">{h.label}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Hero;
