import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import profile from '../data/profile';

const About = () => (
    <Section id="about" eyebrow="About" icon="user" title="Professional Summary">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 lg:gap-8">
            <Reveal className="card p-6 sm:p-8">
                <div className="space-y-4 text-base sm:text-lg text-gray-300 leading-relaxed">
                    {profile.summary.map((para) => (
                        <p key={para}>{para}</p>
                    ))}
                </div>
            </Reveal>

            <Reveal className="card p-6 sm:p-8" delay={100}>
                <h3 className="font-space text-lg font-semibold text-white flex items-center gap-2">
                    <Icon name="target" className="w-5 h-5 text-neonPurple" />
                    Core Strengths
                </h3>
                <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {profile.strengths.map((s) => (
                        <li key={s} className="flex items-center gap-3 text-gray-200">
                            <span className="grid place-items-center w-6 h-6 rounded-md bg-neonCyan/15 text-neonPurple shrink-0">
                                <Icon name="check" className="w-3.5 h-3.5" />
                            </span>
                            {s}
                        </li>
                    ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                        Working knowledge of <span className="text-gray-200">ITIL practices</span> and{' '}
                        <span className="text-gray-200">Generative AI concepts</span> including LLMs, RAG and LangChain.
                    </p>
                </div>
            </Reveal>
        </div>
    </Section>
);

export default About;
