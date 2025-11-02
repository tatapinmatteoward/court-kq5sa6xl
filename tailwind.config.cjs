/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0c1426',
        accent: '#ffb300',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
