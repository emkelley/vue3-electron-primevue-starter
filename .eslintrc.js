module.exports = {
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3,
        multiline: 1,
        allowFirstLine: true
      }
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ]
  },

  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  }
}
