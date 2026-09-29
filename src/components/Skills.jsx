import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import skillsData from '../data/skills';

const Skills = () => {
    // Categories with several skills get a card; single-item categories
    // (e.g. Tools) are shown in a slim strip underneath.
    const cards = skillsData.filter((g) => g.skills.length > 1);
    const compact = skillsData.filter((g) => g.skills.length <= 1);

    return (
        <Section
            id="skills"
            eyebrow="Skills"
            icon="code"
            title="Technical Skills"
            intro="Tools and techniques I use for data cleaning, SQL analysis, reporting, dashboards and automation."
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {cards.map((group, idx) => (
                    <Reveal key={group.category} delay={(idx % 3) * 80} className="card card-hover p-6">
                        <h3 className="flex items-center gap-3 font-space text-lg font-semibold text-white">
                            <span className="icon-tile">
                                <Icon name={group.icon} className="w-5 h-5" />
                            </span>
                            {group.category}
                        </h3>
                        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                            {group.skills.map((skill) => (
                                <li key={skill} className="chip">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </Reveal>
                ))}
            </div>

            {compact.map((group) => (
                <Reveal key={group.category} className="mt-4 sm:mt-5 card px-6 py-4 flex flex-wrap items-center gap-3">
                    <h3 className="flex items-center gap-3 font-space text-base font-semibold text-white">
                        <span className="icon-tile w-9 h-9">
                            <Icon name={group.icon} className="w-4 h-4" />
                        </span>
                        {group.category}
                    </h3>
                    <ul className="flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
                        {group.skills.map((skill) => (
                            <li key={skill} className="chip">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </Section>
    );
};

export default Skills;
