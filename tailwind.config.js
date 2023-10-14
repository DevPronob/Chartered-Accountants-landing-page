/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'ddff3ff': '#DDF3FF',
        'dd999': '#999',
        
      },
    },
  },
  plugins: [require("daisyui")],
}