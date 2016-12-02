;(function(ng) {
  'use strict';

  ng.module('bancoApp')
    .config([
      '$locationProvider',
      function($locationProvider) {
        
        $locationProvider.html5Mode(true);
        
      }
    ]);
}(window.angular));
