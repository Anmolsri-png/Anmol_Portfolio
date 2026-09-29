import React, { useEffect, useState } from 'react';
import Icon from './Icon';
import profile from '../data/profile';

const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' },
];

const Header = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');

    // Shadow on scroll + simple scroll-spy for the active nav link.
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 8);
            const offset = window.scrollY + 120;
            let current = '';
            navLinks.forEach(({ href }) => {
                const el = document.querySelector(href);
                if (el && el.offsetTop <= offset) current = href;
            });
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on Escape.
    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
    }, [open]);

    const resumeHref = `${process.env.PUBLIC_URL}/${profile.resumeFile}`;

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled || open ? 'bg-darkBg/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30' : 'bg-transparent border-b border-transparent'
            }`}
        >
            <nav aria-label="Primary" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
                <a href="#top" className="flex items-center gap-3 rounded-lg group" aria-label={`${profile.name} — back to top`}>
                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-neonCyan to-neonGreen text-white font-space font-bold text-sm shadow-md shadow-neonCyan/30">
                        {profile.initials}
                    </span>
                    <span className="font-space font-semibold text-white tracking-tight hidden sm:block group-hover:text-neonPurple transition-colors">
                        {profile.name}
                    </span>
                </a>

                <ul className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                aria-current={active === link.href ? 'true' : undefined}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                                    active === link.href ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-2">
                    <a
                        href={resumeHref}
                        download
                        className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-neonCyan hover:bg-neonCyan/85 transition-colors shadow-md shadow-neonCyan/25"
                    >
                        <Icon name="download" className="w-4 h-4" />
                        Resume
                    </a>
                    <button
                        type="button"
                        className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {open && (
                <div id="mobile-menu" className="lg:hidden border-t border-white/10 bg-darkBg/95 backdrop-blur-md">
                    <ul className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className={`block px-3 py-3 rounded-lg text-base font-medium ${
                                        active === link.href ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                        <li className="sm:hidden pt-2 pb-1">
                            <a
                                href={resumeHref}
                                download
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white bg-neonCyan"
                            >
                                <Icon name="download" className="w-4 h-4" />
                                Download Resume
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
