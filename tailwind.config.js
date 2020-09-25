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
      extend: {}
    },
    variants: {},
    plugins: []
  }
