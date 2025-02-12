module.exports = {
  content: ["./**/*.php", "./src/**/*.js"],
  plugins: [require("@tailwindcss/typography")],
  theme: {
    extend: {
      fontFamily: {
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      fontVariationSettings: ['hover', 'focus'],
    },
  },
}
