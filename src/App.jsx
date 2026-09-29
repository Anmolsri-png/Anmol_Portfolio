import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => (
    <div className="min-h-screen bg-darkBg text-gray-200 font-inter antialiased">
        <a href="#main" className="skip-link">
            Skip to main content
        </a>
        <Header />
        <Hero />
        <main id="main" tabIndex="-1" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 outline-none">
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Activities />
            <Contact />
        </main>
        <Footer />
    </div>
);

export default App;
