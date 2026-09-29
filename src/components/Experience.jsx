import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import experienceData from '../data/experience';

const Experience = () => (
    <Section id="experience" eyebrow="Experience" icon="briefcase" title="Work Experience">
        <ol className="relative border-l border-white/10 ml-3 sm:ml-4 space-y-8">
            {experienceData.map((job) => (
                <li key={`${job.company}-${job.title}`} className="pl-8 sm:pl-10 relative">
                    <span
                        className="absolute -left-[13px] top-7 grid place-items-center w-6 h-6 rounded-full bg-darkBg border-2 border-neonCyan"
                        aria-hidden="true"
                    >
                        <span className="w-2 h-2 rounded-full bg-neonPurple" />
                    </span>
                    <Reveal as="article" className="card p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                            <div>
                                <h3 className="font-space text-xl sm:text-2xl font-semibold text-white">{job.title}</h3>
                                <p className="mt-1 text-neonPurple font-medium">{job.company}</p>
                            </div>
                            <p className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 whitespace-nowrap">
                                <Icon name="calendar" className="w-4 h-4 text-neonPurple" />
                                {job.date}
                                {job.current && <span className="ml-1 w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true" />}
                            </p>
                        </div>

                        <ul className="mt-6 space-y-3">
                            {job.responsibilities.map((item) => (
                                <li key={item} className="flex items-start gap-3 text-gray-300 leading-relaxed">
                                    <Icon name="check" className="w-4 h-4 mt-1.5 text-emerald-400 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        {job.tools && (
                            <ul className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2" aria-label="Tools used">
                                {job.tools.map((t) => (
                                    <li key={t} className="chip">
                                        {t}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Reveal>
                </li>
            ))}
        </ol>
    </Section>
);

export default Experience;
