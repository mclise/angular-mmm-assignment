'use strict';

require('angular/angular');

var mmmCalcApp = angular.module('mmmCalcApp', []);

// Controllers
require('./mmm-controller')(mmmCalcApp);

// Services
require('./services/calc-service')(mmmCalcApp);

// Directives
require('./directives/mmm-directive')(mmmCalcApp);

