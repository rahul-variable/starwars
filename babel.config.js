module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['@babel/plugin-proposal-class-properties'],
  env: {
    development: {
      ignore: ['src/**/*.test.js', 'src/**/__mocks__/*', 'src/**/__test__/*', 'src/**/__tests__/*']
    }
  }
};
