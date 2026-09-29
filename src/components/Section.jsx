import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

// Fades content in once it scrolls into view. Falls back to visible
// immediately when IntersectionObserver is unavailable; reduced-motion
// users get no movement (handled in animations.css).
export const Reveal = ({ children, className = '', as: Tag = 'div', delay = 0 }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return undefined;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <Tag
            ref={ref}
            className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
            style={delay ? { transitionDelay: `${delay}ms` } : undefined}
        >
            {children}
        </Tag>
    );
};

// Consistent section shell: anchor offset, eyebrow, heading, intro.
const Section = ({ id, eyebrow, title, icon, intro, children, className = '' }) => (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 py-12 md:py-16 ${className}`}>
        <Reveal as="header" className="mb-8 md:mb-10 max-w-3xl">
            {eyebrow && (
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-neonPurple mb-3">
                    {icon && <Icon name={icon} className="w-4 h-4" />}
                    {eyebrow}
                </p>
            )}
            <h2 id={`${id}-title`} className="font-space text-3xl md:text-4xl font-bold text-white tracking-tight">
                {title}
            </h2>
            {intro && <p className="mt-3 text-base md:text-lg text-gray-400 leading-relaxed">{intro}</p>}
        </Reveal>
        {children}
    </section>
);

export default Section;
