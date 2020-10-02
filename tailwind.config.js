module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'jolivert': '#78DF87',
      }
    }
  }
}