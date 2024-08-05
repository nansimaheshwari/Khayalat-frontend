/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnPrimary: "#EFD5AC",
        fontPrimary: "#908D81",
        bgSecondary: "#EDE7DB",
        bgPrimary: "#F6F2E7",
        btnBorder: "#C8BDAB",
      },
    },
  },
  plugins: [],
};
