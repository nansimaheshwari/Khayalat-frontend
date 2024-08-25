/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#EFD5AC",
        headingPrimary: "#908D81",
        headingSecondary:"#716E65",
        bgSecondary: "#EDE7DB",
        bgPrimary: "#F6F2E7",
        btnBorder: "#C8BDAB",
      },
    },
    fontFamily: {
      primary: ['"Handlee"', 'cursive'],
      secondary: ['"Style Script"', 'cursive'],
      textAnother: ['"Oregano"', 'sans-serif'],
    },
  },
  plugins: [],
};
