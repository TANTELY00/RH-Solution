import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
        fontFamily: {
            tektur: ["Tektur", "sans-serif"], // Ajout de la police
          },
          wordSpacing: {
            wider: '0.5rem',
            widest: '0.5rem',
          },  
    },
  },
  plugins: [],
};

export default config;
