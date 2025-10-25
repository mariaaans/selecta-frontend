module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mistico-oro': '#FFD166',
        'mistico-azul': '#118AB2',
        'mistico-rosa': '#EF476F',
        'mistico-verde': '#06D6A0',
        'pixel-bg': '#0b1020'
      },
      boxShadow: {
        'pixel-glow': '0 0 12px rgba(255, 161, 0, 0.4)',
        'mistico-glow': '0 0 20px rgba(17, 138, 178, 0.4)'
      },
      fontFamily: {
        'pixel': ['"Press Start 2P"', 'monospace']
      }
    },
  },
  plugins: [],
}
