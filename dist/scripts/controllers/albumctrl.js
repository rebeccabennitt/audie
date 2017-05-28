(function() {
<<<<<<< HEAD
  function AlbumCtrl() {
  	this.albumData = albumPicasso;
  }

  angular
    .module('audie')
    .controller('AlbumCtrl', AlbumCtrl);
})();
=======
     function AlbumCtrl(Fixtures) {
	        this.albumData = Fixtures.getAlbum();
	        }

     angular
         .module('audie')
         .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
 })();
>>>>>>> master
