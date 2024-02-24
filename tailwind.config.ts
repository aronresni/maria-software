import { Config  } from "tailwindcss";

// Define la función para aplanar la paleta de colores
function flattenColorPalette(colors: any) {
  return Object.keys(colors).reduce((acc, key) => {
    const value = colors[key];
    if (typeof value === 'object') {
      Object.keys(value).forEach(subKey => {
        acc[`${key}-${subKey}`] = value[subKey];
      });
    } else {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, string>);
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};
// Esta función agrega cada color de Tailwind como una variable CSS global, por ejemplo, var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  
 
  addBase({
    ":root": newVars,
  });
}

export default config;
