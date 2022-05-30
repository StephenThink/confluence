module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
      debugScreens: {
          position: ["bottom", "right"],
      },
      fontFamily: {
          "be-extra-bold": ['be-extra-bold'],
          "be-semi-bold": ['be-semi-bold'],
          "cir-bold": ['cir-bold'],
          "cir-book": ['cir-book'],
          "cir-medium": ['cir-medium'],
          "gotham": ['gotham'],
          "rota": ['rota'],
      },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-debug-screens"),
  ],
}
