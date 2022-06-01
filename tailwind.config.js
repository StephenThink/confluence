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
                '1000': '1000',
            },
            keyframes: {
                mdTriSlide: {
                    '0%': {bottom: '-50rem'},
                    '100%': {bottom: '-25rem'},
                },
                lgTriSlide: {
                    '0%': {bottom: '-50rem',right:'-14.5rem'},
                    '100%': {bottom: '-35rem',right:'-14.5rem'},
                },
                xlTriSlide: {
                    '0%': {bottom: '-55rem',right:'-14.5rem'},
                    '100%': {bottom: '-35rem',right:'-14.5rem'},
                },
                // '2xlTriSlide': {
                //     '0%': {bottom: '-55rem'},
                //     '100%': {bottom: '-30rem'},
                // },
                '2xlTriSlide': {
                    '0%': {bottom: '-55rem'},
                    '100%': {transform: 'translateY(-30rem)'},
                },
                chat: {
                    '0%': {right: '-20rem'},
                    '100%': {right: '-10.5rem'},
                },

            },
            animation: {
                mdTriSlide: 'mdTriSlide 2s 3s ease-in-out forwards',
                lgTriSlide: 'lgTriSlide 2s 3s ease-in-out forwards',
                xlTriSlide: 'xlTriSlide 2s 3s ease-in-out forwards',
                '2xlTriSlide': '2xlTriSlide 2s 3s ease-in-out forwards',
                chat: 'chat 2s 3s ease-in-out forwards',

        },
    },
},
    plugins:[
    require('@tailwindcss/typography'),
    require("tailwindcss-debug-screens"),
],
}
