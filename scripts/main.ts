/// <reference path="typings/require.d.ts"/>
require.config({
  baseUrl: 'scripts',
  paths: {
    'jquery': 'libs/jquery-1.11.2'
  }
});

requirejs(['app']);
