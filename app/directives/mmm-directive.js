'use strict';

module.exports = function(app) {
  app.directive('mmmDirective', function(){
    return {
      restrict: 'E',
      templateUrl: './views/mmm-template.html'
    };
  });
};