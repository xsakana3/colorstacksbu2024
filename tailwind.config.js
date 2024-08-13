/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sbu-red1": "#d52037",
        "sbu-red2": "#990000",
        "sbu-red3": "#6b000d",
        "sbu-grey1": "#bebebe",
        "sbu-grey2": "#828282",
        "sbu-grey3": "#4b4b4b",
        "cstck-beige": "#f5f2ed",
        "cstck-black": "#282828",
        "cstck-blue1": "#c6d1ef",
        "cstck-blue2": "#091024",
        "cstck-grey1": "#e0e0e0",
        "cstck-grey2": "#616061",
        "cstck-turquoise": "#348e87",
        "cstck-turquoise-brand": "#3ca39b",
        "cstck-yellow-brand": "#fdb532",
      },
    },
  },
  plugins: [],
}

