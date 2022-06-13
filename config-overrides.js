const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@assets' : 'src/assets',
    '@codes': 'src/codesamples',
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@context': 'src/context',
    '@images':'src/assets/images',
    '@modules':'src/modules',
    '@layout':'src/Layout',
    '@pages':'src/pages'
  })(config)

  return config
}