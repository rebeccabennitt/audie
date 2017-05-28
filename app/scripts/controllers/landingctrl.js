(function() {
     function LandingCtrl() {
	     this.heroTitle = "give your ears some love";
     }

     angular
         .module('audie')
         .controller('LandingCtrl', LandingCtrl);
 })();
