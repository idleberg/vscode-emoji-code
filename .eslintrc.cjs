module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:json/recommended-with-comments'
  ],
  ignorePatterns: [
    'index.js'
  ],
  overrides: [
    {
      files: [
        '*.yaml',
        '*.yml'
      ],
      plugins: ['yaml'],
      extends: ['plugin:yaml/recommended']
    }
  ]
};
