module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        enabled: false,
    },
    theme: {
        fontFamily: {
            'display': ['Oswald','sans-serif'],

        },
        extend: {
            screens: {
                'portrait': {'raw': '(orientation: portrait)'},
                // => @media (orientation: portrait) { ... }
            },

            colors: {
                'jolivert': '#78DF87',
            }
        },
    },


    variants: {},
    plugins: [],
}


