// https://github.com/vuejs/eslint-config-standard/blob/master/index.js
// https://github.com/benmosher/eslint-plugin-import/issues/1396
const resolver = {
  [require.resolve('eslint-import-resolver-node')]: {}
}

// in case the project does not depend on @vue/cli-service
try {
  resolver[require.resolve('eslint-import-resolver-webpack')] = {
    config: require.resolve('@vue/cli-service/webpack.config.js')
  }
  // eslint-disable-next-line no-empty
} catch (err) {}

module.exports = {
  root: true,
  extends: ['plugin:vue/recommended', '@alljoint-next', 'prettier'],
  settings: {
    'import/resolver': {
      ...resolver,
      nuxt: {
        extensions: ['.js', '.jsx', '.json', '.mjs', '.vue']
      }
    },
    'import/extensions': ['.js', '.jsx', '.json', '.mjs', '.vue']
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  }
}
