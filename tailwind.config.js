module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  preflight: true,
  darkMode: 'class',
  // important: true,
  theme: {},
  plugins: [ require( 'daisyui' ) ],
}
