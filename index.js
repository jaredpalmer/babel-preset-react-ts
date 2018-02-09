/**
 * Copyright (c) 2018-present, Jared Palmer.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const reactApp = require('babel-preset-react-app');
const typeScript = require('@babel/preset-typescript');

module.exports = function(api, opts) {
  if (!opts) {
    opts = {};
  }
  return {
    presets: [
      reactApp,
      {
        flow: false,
      },
      typeScript,
    ],
  };
};
