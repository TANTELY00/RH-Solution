import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
        fontFamily: {
            tektur: ["Tektur", "sans-serif"], // Ajout de la police
          },
    },
  },
  plugins: [],
};

export default config;
