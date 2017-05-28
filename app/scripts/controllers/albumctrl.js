(function() {
     function AlbumCtrl(fixtures, SongPlayer) {
	        this.albumData = Fixtures.getAlbum();
	        this.songPlayer = SongPlayer;
	        }

     angular
         .module('audie')
         .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
         })();
