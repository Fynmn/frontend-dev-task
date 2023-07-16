/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#2478cc",
        "f4-500": "#f4f4f4",
      },
      borderRadius: {
        4: "4px",
        // '8': '8px',
        // '12': '12px',
        // 'custom': '20px',
      },
      // fontFamily: {
      //   inter: ["Inter", "sans-serif"],
      //   poppins: ["Poppins", "sans-serif"],
      //   roboto: ["Roboto", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
