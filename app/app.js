require('angular');
require('angular-resource');
require('angular-sanitize');

var PostsService = require('./services/PostsService');
var MainController = require('./controllers/MainController');

var app = angular.module('app', ['ngResource', 'ngSanitize']);

app.factory('Posts', PostsService);
app.controller('MainController', ['$scope', '$http', '$location', 'Posts', MainController]);
