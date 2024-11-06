/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        myShadow:
          "3px 3px 10px rgba(0, 0, 0, 0.3), -3px -3px 10px rgba(255, 255, 255, 0.8)",
      },
      backgroundImage: {
        hero: "url('/assets/hero_bg.png')",
        tbee: "url('/assets/tbee.jpg')",
        grunge: "url('/assets/grunge.jpg')",
        paper: "url('/assets/paper_texture.jpg')",
        whiteStriped: "url('/assets/white-striped-paper.jpg')",
        home: "url('/assets/mzani.jpg')",
      },
      fontFamily: {
        raleway: '"Inter", sans-serif',
      },
    },
  },
  plugins: [],
};
