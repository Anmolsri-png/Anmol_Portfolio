import React from 'react';
import Icon from './Icon';
import profile from '../data/profile';

const Footer = () => {
    const { contact } = profile;
    const links = [
        { href: contact.linkedin, label: 'LinkedIn', icon: 'linkedin', external: true },
        { href: contact.github, label: 'GitHub', icon: 'github', external: true },
        { href: contact.emailHref, label: 'Email', icon: 'mail' },
    ];

    return (
        <footer className="border-t border-white/10 bg-darkBlue/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                    <p className="font-space text-lg font-semibold text-white">{profile.name}</p>
                    <p className="mt-1 text-sm text-gray-400">{profile.title}</p>
                    <p className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-3">
                    {links.map((l) => (
                        <a
                            key={l.label}
                            href={l.href}
                            aria-label={l.label}
                            title={l.label}
                            {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            className="grid place-items-center w-10 h-10 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-neonPurple/60 hover:bg-neonCyan/15 transition-colors"
                        >
                            <Icon name={l.icon} className="w-5 h-5" />
                        </a>
                    ))}
                    <a
                        href="#top"
                        className="ml-2 inline-flex items-center gap-2 px-3 h-10 rounded-lg border border-white/10 text-sm text-gray-300 hover:text-white hover:border-neonPurple/60 transition-colors"
                    >
                        <Icon name="arrowUp" className="w-4 h-4" />
                        Top
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
