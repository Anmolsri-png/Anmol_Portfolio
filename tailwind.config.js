module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neonCyan: '#8b5cf6',
        neonPurple: '#a78bfa',
        neonGreen: '#c084fc',
        darkBg: '#0a0014',
        darkBlue: '#1a0b2e',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};