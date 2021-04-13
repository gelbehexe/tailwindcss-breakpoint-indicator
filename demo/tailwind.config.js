module.exports = {
  purge: {
    mode: 'all',
    content: ['./demo/pages/**/*.js'],
    options: {
      whitelist: ['html', 'body'],
    },
  },
  theme: {},
  variants: {},
  breakpointIndicator: {
    enabled: true,
  },
  plugins: [require('../src/index.js')],
}
