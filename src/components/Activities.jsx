import React from 'react';
import { Reveal } from './Section';
import Icon from './Icon';
import profile from '../data/profile';

// Leadership & Activities and Additional Information, shown side by side.
const Activities = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 py-12 md:py-16">
        <section id="leadership" aria-labelledby="leadership-title" className="scroll-mt-20">
            <Reveal as="header" className="mb-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neonPurple mb-3">
                    <Icon name="flag" className="w-4 h-4" />
                    Leadership
                </p>
                <h2 id="leadership-title" className="font-space text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Leadership &amp; Activities
                </h2>
            </Reveal>
            {profile.leadership.map((item) => (
                <Reveal as="article" key={item.role} className="card card-hover p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                        <span className="icon-tile w-12 h-12">
                            <Icon name="users" className="w-6 h-6" />
                        </span>
                        <h3 className="font-space text-xl font-semibold text-white">{item.role}</h3>
                    </div>
                    <p className="mt-5 text-gray-300 leading-relaxed">{item.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2" aria-label="Responsibilities">
                        {item.tags.map((t) => (
                            <li key={t} className="chip">
                                {t}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </section>

        <section id="additional" aria-labelledby="additional-title" className="scroll-mt-20 mt-14 lg:mt-0">
            <Reveal as="header" className="mb-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neonPurple mb-3">
                    <Icon name="spark" className="w-4 h-4" />
                    More about me
                </p>
                <h2 id="additional-title" className="font-space text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Additional Information
                </h2>
            </Reveal>
            <Reveal className="card p-6 sm:p-8 space-y-6">
                <div>
                    <h3 className="flex items-center gap-2 font-space text-lg font-semibold text-white">
                        <Icon name="globe" className="w-5 h-5 text-neonPurple" />
                        Languages
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {profile.languages.map((l) => (
                            <li key={l} className="chip">
                                {l}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pt-6 border-t border-white/10">
                    <h3 className="flex items-center gap-2 font-space text-lg font-semibold text-white">
                        <Icon name="target" className="w-5 h-5 text-neonPurple" />
                        Open to
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                        {profile.openTo.map((r) => (
                            <li key={r} className="chip chip-accent">
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>
            </Reveal>
        </section>
    </div>
);

export default Activities;
