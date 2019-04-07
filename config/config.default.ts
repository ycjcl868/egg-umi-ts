import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {
    keys: `${appInfo.name}_1554630098109_982`,
    middleware: [],
    view: {
      mapping: {
        '.html': 'nunjucks',
      },
    },
    assets: {
      publicPath: '/public/',
      devServer: {
        debug: true,
        command: 'umi dev',
        port: 8000,
        env: {
          APP_ROOT: process.cwd() + '/app/web',
          BROWSER: 'none',
          ESLINT: 'none',
          SOCKET_SERVER: 'http://127.0.0.1:8000',
          PUBLIC_PATH: 'http://127.0.0.1:8000',
        },
      },
    },
  } as PowerPartial<EggAppConfig>;

  return config;
};
