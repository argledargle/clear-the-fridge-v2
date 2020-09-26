module.exports = {
    purge: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html'
    ],
    theme: {
      screens: {
        'sm': {'max': '639px'},
      },
      fontSize: {
        'xxs': '.5rem',
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem'
      },
      extend: {
        width: {
          '45': '45%'
        },
        padding: {
          '.8': '.8rem'
        }
      }
    },
    variants: {},
    plugins: []
  }
