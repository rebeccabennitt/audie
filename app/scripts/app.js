(function() {
     function config($stateProvider, $locationProvider) {

	     $locationProvider
	     	.html5mode({
		     	enabled: true,
		     	requiredBase: false
	     	});

	     	$stateProvider
	     		.state('landing', {
		     		url: '/',
		     		controller: 'LandingCtrl as landing',
		     		templateUrl: '/templates/landing.html'
	     		})
	     		.state('album', {
		     		url: '/album',
		     		templateUrl: '/templates/album.html'
	     		})
	     		.state('collection', {
		     		url:'/collection',
		     		controller: 'collectionctrl as collection',
		     		templateUrl: '/templates/collection.html'
	     		});
     }

     angular
         .module('audie', ['ui.router'])
         .config(config);
 })();

;
