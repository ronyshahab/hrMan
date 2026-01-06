/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        profileColor: "#189b33",
        softGreen: "#E9F7EF",
        darkGreen: "#14532D",
      },
    },
  },
  plugins: [],
}