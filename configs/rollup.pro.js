import baseConfig from './rollup.base';

export default {
  ...baseConfig,
  output: {
    sourcemap: true,
    file: 'dist/index.js',
    format: 'umd',
    name: 'bundle'
  },
  plugins: [
    ...baseConfig.plugins,
  ]
};