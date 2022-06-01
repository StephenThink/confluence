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
    extend: {
          colors: {
              lime: "#03FC96",
              'dark-lime': "#0FBAA9",
              'alt-lime': "#0BE3A0",
              dark: "#1F2128",
          },
        spacing: {
            navbar: '103px',
            hero: '977px',
            partners: '302px',
            footer: '325px',
            panel: '400px',
            aboutimagetop: '29rem',
            "hero-height": "calc(100vh - 103px)",
        },
        zIndex: {
              '99': '99',
              '100': '100',
              '102': '102',
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-debug-screens"),
  ],
}
