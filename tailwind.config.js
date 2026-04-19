/**
 * Tailwind CSS Configuration
 * This config enables Tailwind for all your app, components, and styles.
 */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/components/ui/**/*.tsx',
    './src/app/components/**/*.tsx',
    './src/app/**/*.tsx',
    './src/styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
