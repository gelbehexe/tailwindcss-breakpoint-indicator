module.exports = {
  content: ['./demo/pages/**/*.js'],
  safelist: ['html', 'body'],
  theme: {},
  variants: {},
  breakpointIndicator: {
    enabled: true,
  },
  plugins: [require('../src/index.js')],
}
