const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@codes': 'src/codesamples',
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@context': 'src/context',
    '@assets' : 'src/assets',
    '@modules':'src/modules',
    '@layout':'src/Layout',
    '@pages':'src/pages'
  })(config)

  return config
}