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
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:jest/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'prettier/vue'
  ],
  settings: {
    'import/resolver': {
      ...resolver,
      nuxt: {
        extensions: ['.js', '.jsx', '.json', '.mjs', '.vue']
      }
    },
    'import/extensions': ['.js', '.jsx', '.json', '.mjs', '.vue']
  },
  env: {
    node: true,
    jest: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }]
  }
}
