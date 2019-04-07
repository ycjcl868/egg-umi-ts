'use strict';

import { EggPlugin } from 'egg';

export default {
  assets: {
    enable: true,
    package: 'egg-view-assets',
  },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
} as EggPlugin;
