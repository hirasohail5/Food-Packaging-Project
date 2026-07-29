/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 👇 XD file se exact hex nikaal kar (eyedropper) yahan update kar dena
        "brand-red": "#E9151C",
      },
    },
  },
  plugins: [],
};
