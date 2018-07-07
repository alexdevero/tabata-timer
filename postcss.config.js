module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      browsers: [
        'Firefox >= 58',
        'Chrome >= 62',
        'ie >= 10',
        'last 4 versions',
        'Safari >= 9'
      ]
    },
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: ['html', 'body'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}
