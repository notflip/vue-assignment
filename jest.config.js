module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/api/api.js',
    '!src/store/index.js',
    '!src/router/index.js',
    '!src/views/**/*.{js,vue}'
  ]
}
