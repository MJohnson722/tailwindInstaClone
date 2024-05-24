/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        insta: [
          "Trebuchet MS",
          "Lucida Sans Unicode",
          "Lucida Grande",
          "Lucida Sans",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        "corn-flower-blue": "#6495ED",
      },
    },
  },
  plugins: [],
};
