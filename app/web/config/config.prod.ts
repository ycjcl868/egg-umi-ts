import { IConfig } from 'umi-types';

export default {
  hash: true,
  publicPath: '',
  outputPath: '../public',
  manifest: {
    fileName: '../../config/manifest.json',
  },
  extraBabelPlugins: [
    ['transform-remove-console', { exclude: [ 'error', 'info' ] }],
  ],
} as IConfig;
