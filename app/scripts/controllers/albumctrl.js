(function() {
  function AlbumCtrl() {
  	this.albumData = albumPicasso;
  }

  angular
    .module('audie')
    .controller('AlbumCtrl', AlbumCtrl);
})();
