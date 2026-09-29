import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import { education } from '../data/education';

const Education = () => (
    <Section id="education" eyebrow="Education" icon="graduation" title="Education">
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {education.map((item, idx) => (
                <Reveal
                    as="li"
                    key={item.degree}
                    delay={idx * 80}
                    className={`card card-hover p-6 flex flex-col ${idx === 0 ? 'md:col-span-3 lg:col-span-1 border-neonCyan/40' : ''}`}
                >
                    <div className="flex items-center justify-between gap-3">
                        <span className="icon-tile">
                            <Icon name="graduation" className="w-5 h-5" />
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-gray-300">
                            {item.period}
                        </span>
                    </div>
                    <h3 className="mt-5 font-space text-lg font-semibold text-white leading-snug">{item.degree}</h3>
                    <p className="mt-1 text-sm text-gray-400">{item.institution}</p>
                    {item.detail && (
                        <p className="mt-4 text-sm text-gray-300">
                            Score: <span className="font-semibold text-white">{item.detail}</span>
                        </p>
                    )}
                </Reveal>
            ))}
        </ol>
    </Section>
);

export default Education;
