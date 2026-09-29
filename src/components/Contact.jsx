import React, { useState } from 'react';
import Section, { Reveal } from './Section';
import Icon from './Icon';
import profile from '../data/profile';

const { contact } = profile;

const channels = [
    { icon: 'mail', label: 'Email', value: contact.email, href: contact.emailHref },
    { icon: 'phone', label: 'Phone', value: contact.phone, href: contact.phoneHref },
    { icon: 'linkedin', label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin, external: true },
    { icon: 'github', label: 'GitHub', value: contact.githubLabel, href: contact.github, external: true },
];

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [opened, setOpened] = useState(false);

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    // Composes the message in the visitor's own email app, addressed to Anmol.
    // No third-party form service is needed, so messages always reach the right inbox.
    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio enquiry from ${form.name}`;
        const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
        window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setOpened(true);
    };

    return (
        <Section
            id="contact"
            eyebrow="Contact"
            icon="send"
            title="Let's work together"
            intro="Open to Python development, SQL development, data analytics, business intelligence and IT roles. The quickest way to reach me is by email or LinkedIn."
        >
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
                <Reveal as="ul" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4 content-start">
                    {channels.map((c) => (
                        <li key={c.label}>
                            <a
                                href={c.href}
                                {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                aria-label={`${c.label}: ${c.value}${c.external ? ' (opens in a new tab)' : ''}`}
                                className="card card-hover flex items-center gap-4 p-4 sm:p-5 group"
                            >
                                <span className="icon-tile shrink-0">
                                    <Icon name={c.icon} className="w-5 h-5" />
                                </span>
                                <span className="min-w-0 flex-1">
                                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{c.label}</span>
                                    <span className="block text-sm sm:text-base font-medium text-gray-100 truncate group-hover:text-white">
                                        {c.value}
                                    </span>
                                </span>
                                <Icon
                                    name={c.external ? 'external' : 'arrowRight'}
                                    className="w-4 h-4 text-gray-500 group-hover:text-neonPurple transition-colors shrink-0"
                                />
                            </a>
                        </li>
                    ))}
                </Reveal>

                <Reveal className="card p-6 sm:p-8" delay={100}>
                    <h3 className="font-space text-xl font-semibold text-white">Send a message</h3>
                    <p className="mt-1 text-sm text-gray-400">
                        This opens your email app with the message addressed to{' '}
                        <a href={contact.emailHref} className="text-neonPurple hover:text-white underline-offset-4 hover:underline">
                            {contact.email}
                        </a>
                        .
                    </p>

                    {opened && (
                        <p role="status" className="mt-4 px-4 py-3 rounded-xl border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 text-sm">
                            Your email app should now be open with the message ready to send.
                        </p>
                    )}

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="contact-name" className="form-label">Your name</label>
                                <input id="contact-name" type="text" name="name" required autoComplete="name" value={form.name} onChange={onChange} className="form-input" />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="form-label">Your email</label>
                                <input id="contact-email" type="email" name="email" required autoComplete="email" value={form.email} onChange={onChange} className="form-input" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="contact-message" className="form-label">Message</label>
                            <textarea id="contact-message" name="message" rows="5" required value={form.message} onChange={onChange} className="form-input resize-y min-h-[8rem]" />
                        </div>
                        <button type="submit" className="btn btn-primary w-full sm:w-auto">
                            <Icon name="send" className="w-4 h-4" />
                            Send Message
                        </button>
                    </form>
                </Reveal>
            </div>
        </Section>
    );
};

export default Contact;
