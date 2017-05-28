(function() {
     function AlbumCtrl(Fixtures) {
	        this.albumData = Fixtures.getAlbum();
	        }

     angular
         .module('audie')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
