 (function() {
     function CollectionCtrl(Fixtures) {
	     this.albums = Fixtures.getCollection(12);

   }

     angular
         .module('audie')
         .controller('CollectionCtrl',['Fixtures', CollectionCtrl]);
 })();
