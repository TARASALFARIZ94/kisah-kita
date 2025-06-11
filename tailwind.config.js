/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     // Ini penting! Beri tahu Tailwind di mana file-file Anda berada
    // Jika ada folder `pages` untuk Pages Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    // Jika ada folder `app` untuk App Router (PASTIKAN INI ADA)
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Mungkin juga perlu ini jika kode Anda di dalam `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

