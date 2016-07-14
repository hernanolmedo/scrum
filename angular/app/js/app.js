var ngui = require('nw.gui');
var nwin = ngui.Window.get();

onload = function() {
    nwin.show();
    nwin.maximize();
}

rootScopeOn = {};

var gui = require('nw.gui');
var win = gui.Window.get();

var app = angular.module('scrum', [
    'ui.router',    
    'ui.bootstrap',

	// Controllers
	'scrum.controllers.application',
    'scrum.controllers.index',

]);

app.config(function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise("/app/index")

	$stateProvider
    .state('app',{
        url:'/app',
        abstract: true,
        templateUrl:'views/layouts/layout.html',
        controller:'ApplicationController'
    })    
    .state('app.index',{
        url:'/index',
        views: {
            'mainView': {
                templateUrl:'views/index/home.html',
                controller: 'index#home'
            }
        }
    })
})