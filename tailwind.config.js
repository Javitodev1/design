/* eslint-disable import/no-extraneous-dependencies, global-require */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
    './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        blog: '3 / 2',
      },
      colors: {
        primary: '#fff',
        secondary: '#ddd',
        'dark-primary': '#000',
        'dark-secondary': '#111',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
