import React from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import projectsData from '../data/projects';
import profile from '../data/profile';

const Projects = () => (
    <Section
        id="projects"
        eyebrow="Projects"
        icon="chart"
        title="Analytics Projects"
        intro="Academic projects in sales and HR analytics using Python, SQL, Excel and Power BI."
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {projectsData.map((project, idx) => (
                <Reveal as="article" key={project.title} delay={idx * 100} className="card card-hover p-6 sm:p-8 flex flex-col">
                    <div className="flex items-start gap-4">
                        <span className="icon-tile w-12 h-12">
                            <Icon name={project.icon} className="w-6 h-6" />
                        </span>
                        <div>
                            <h3 className="font-space text-xl sm:text-2xl font-semibold text-white">{project.title}</h3>
                            <p className="mt-1 text-sm font-medium text-neonPurple">{project.subtitle}</p>
                        </div>
                    </div>

                    <p className="mt-5 text-gray-300 leading-relaxed">{project.summary}</p>

                    <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">What I did</h4>
                    <ul className="mt-3 space-y-3 flex-1">
                        {project.highlights.map((point) => (
                            <li key={point} className="flex items-start gap-3 text-sm sm:text-base text-gray-300 leading-relaxed">
                                <Icon name="check" className="w-4 h-4 mt-1 text-emerald-400 shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <ul className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
                        {project.techStack.map((tech) => (
                            <li key={tech} className="chip chip-accent">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </div>

        <Reveal className="mt-6 card p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <span className="icon-tile w-12 h-12">
                    <Icon name="github" className="w-6 h-6" />
                </span>
                <div>
                    <p className="font-space text-lg font-semibold text-white">Python programs on GitHub</p>
                    <p className="text-sm text-gray-400 break-all">{profile.contact.githubLabel}</p>
                </div>
            </div>
            <a
                href={profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary sm:shrink-0"
                aria-label="View Anmol's Python programs on GitHub (opens in a new tab)"
            >
                View on GitHub
                <Icon name="external" className="w-4 h-4" />
            </a>
        </Reveal>
    </Section>
);

export default Projects;
