import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    security: {
      csrf: false,
    },
  };
  return config;
};
