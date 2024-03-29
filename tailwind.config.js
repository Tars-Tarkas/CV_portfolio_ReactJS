/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,vue,}"],

  // purge: [
  //   './src/**/*.html',
  //   './src/**/*.vue',
  //   './src/**/*.jsx',
  //   './src/**/*.js',
  // ],
  theme: {
    extend: {
      gridTemplateColumns: {
        tablework: "8rem minmax(8rem,1fr)",
      },
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      flexBasis: {
        "1/9": "98%",
        "9/1": "3%",
      },
    },
  },
  plugins: [],
};
