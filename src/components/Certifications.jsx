import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import { certifications } from '../data/education';

const Certifications = () => (
    <Section id="certifications" eyebrow="Certifications" icon="award" title="Certifications">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert, idx) => (
                <Reveal as="li" key={cert.title} delay={idx * 80} className="card card-hover p-6 flex items-start gap-4">
                    <span className="icon-tile shrink-0">
                        <Icon name={cert.icon} className="w-5 h-5" />
                    </span>
                    <div>
                        <h3 className="font-space text-base sm:text-lg font-semibold text-white leading-snug">{cert.title}</h3>
                        <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
                            <Icon name="award" className="w-4 h-4 text-neonPurple" />
                            {cert.issuer}
                        </p>
                    </div>
                </Reveal>
            ))}
        </ul>
    </Section>
);

export default Certifications;
