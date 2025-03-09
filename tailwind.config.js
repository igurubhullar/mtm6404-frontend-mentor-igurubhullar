/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        // Primary colors
        "light-red": "hsl(356, 100%, 66%)", // CTA text
        "very-light-red": "hsl(355, 100%, 74%)", // CTA hover background
        "very-dark-blue": "hsl(208, 49%, 24%)", // headings

        // Neutral colors
        white: "hsl(0, 0%, 100%)", // text
        "grayish-blue": "hsl(240, 2%, 79%)", // footer text
        "very-dark-grayish-blue": "hsl(207, 13%, 34%)", // body copy
        "very-dark-black-blue": "hsl(240, 10%, 16%)", // footer background

        // Gradient colors - Intro/CTA mobile nav
        "grad-very-light-red": "hsl(13, 100%, 72%)",
        "grad-light-red": "hsl(353, 100%, 62%)",

        // Gradient colors - body
        "grad-very-dark-gray-blue": "hsl(237, 17%, 21%)",
        "grad-very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
      },
      backgroundImage: {
        "gradient-cta":
          "linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%))",
        "gradient-body":
          "linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%))",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};
