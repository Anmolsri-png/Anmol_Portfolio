// Single source of truth for personal details — all content taken from the resume.
const profile = {
    name: 'Anmol Srivastava',
    initials: 'AS',
    title: 'Entry-Level Python Developer | SQL Developer | Data Analyst | IT Fresher',
    roles: ['Python Developer', 'SQL Developer', 'Data Analyst', 'IT Fresher'],
    tagline:
        'BCA graduate and current Data Analyst Intern turning raw data into clean reports, SQL-driven insights and Power BI dashboards.',
    currentRole: {
        title: 'Data Analyst Intern',
        company: 'SY Associates',
        since: 'Sept 2026',
    },
    summary: [
        'BCA graduate and current Data Analyst Intern with hands-on experience in Python, SQL, Excel, Power BI, and data analysis.',
        'Strong foundation in data cleaning, SQL querying, reporting, dashboard development, process automation, and analytical problem-solving, with working knowledge of ITIL practices and Generative AI concepts including LLMs, RAG, and LangChain.',
        'Built academic projects in sales and HR analytics using Python, SQL, Excel, and Power BI. Seeking opportunities in Python development, SQL development, data analytics, business intelligence, or IT.',
    ],
    strengths: [
        'Data cleaning',
        'SQL querying',
        'Reporting',
        'Dashboard development',
        'Process automation',
        'Analytical problem-solving',
    ],
    openTo: [
        'Python Development',
        'SQL Development',
        'Data Analytics',
        'Business Intelligence',
        'IT roles',
    ],
    languages: ['English', 'Hindi'],
    leadership: [
        {
            role: 'Student Coordinator',
            description:
                'Coordinated and supervised a college fest, managing event planning, team responsibilities, coordination, and execution.',
            tags: ['Event planning', 'Team responsibilities', 'Coordination', 'Execution'],
        },
    ],
    contact: {
        phone: '8528369805',
        phoneHref: 'tel:+918528369805',
        email: 'anmolsri41@gmail.com',
        emailHref: 'mailto:anmolsri41@gmail.com',
        linkedin: 'https://www.linkedin.com/in/anmol-srivastava5/',
        linkedinLabel: 'linkedin.com/in/anmol-srivastava5',
        github: 'https://github.com/Anmolsri-png/python-program',
        githubLabel: 'github.com/Anmolsri-png/python-program',
    },
    resumeFile: 'Anmol_Srivastava_Resume.pdf',
    // Put the photo in /public with exactly this name. Until it exists, initials are shown.
    photoFile: 'Anmol_photo.jpg',
};

export default profile;
