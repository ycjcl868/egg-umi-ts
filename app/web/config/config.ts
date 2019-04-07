import { IConfig } from 'umi-types';

export default {
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: {
        webpackChunkName: true,
      },
    }],
  ],
  runtimePublicPath: true,
  disableCSSModules: false,
} as IConfig;
