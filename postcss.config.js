module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-custom-media': {
      importFrom: [
        {
          customMedia: { '--mobile': 'screen and (max-width: 599px)' }
        },
        {
          customMedia: {
            '--tablet': 'screen, (min-width: 600px) and (max-width: 895px)'
          }
        },
        {
          customMedia: {
            '--small-desktop':
                'screen, (min-width: 896px) and (max-width: 1199px)'
          }
        },
        {
          customMedia: {
            '--medium-desktop':
                'screen, (min-width: 1200px) and (max-width: 1799px)'
          }
        },
        {
          customMedia: {
            '--large-desktop': 'screen and (min-width: 1800px)'
          }
        }
      ]
    }
  }
}
