module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'dot-location': [
      'error',
      'property'
    ],
    eqeqeq: [
      'error',
      'always'
    ],
    'no-multi-spaces': [
      2,
      {
        exceptions: {
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'one-var': 0,
    indent: [
      'error',
      2,
      {
        VariableDeclarator: {
          'var': 2,
          'let': 2,
          'const': 3
        }
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'brace-style': [
      2,
      'stroustrup',
      {
        allowSingleLine: true
      }
    ],
    'prefer-arrow-callback': [
      'error'
    ]
  }
}
