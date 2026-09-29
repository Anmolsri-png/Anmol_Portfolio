import React from 'react';

// Subtle SVG network lines behind the hero (decorative only).
const AnimatedNetworkBG = () => (
    <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1440 480"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ pointerEvents: 'none' }}
    >
        <g stroke="#a78bfa" strokeOpacity="0.35">
            <circle cx="200" cy="120" r="80" />
            <circle cx="1240" cy="320" r="100" />
            <circle cx="700" cy="400" r="60" />
            <circle cx="900" cy="100" r="50" />
            <circle cx="400" cy="350" r="40" />
            <circle cx="1100" cy="200" r="30" />
            <circle cx="300" cy="250" r="20" />
            <circle cx="800" cy="200" r="25" />
            <circle cx="600" cy="100" r="15" />
            <circle cx="1000" cy="400" r="18" />
            <line x1="200" y1="120" x2="1240" y2="320" />
            <line x1="700" y1="400" x2="900" y2="100" />
            <line x1="400" y1="350" x2="1100" y2="200" />
            <line x1="300" y1="250" x2="800" y2="200" />
            <line x1="600" y1="100" x2="1000" y2="400" />
        </g>
    </svg>
);

export default AnimatedNetworkBG;
