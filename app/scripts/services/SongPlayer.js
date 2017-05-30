(function () {
    function SongPlayer($rootScope, Fixtures) {
        var SongPlayer = {};
		/**
         * @desc Current album object
         * @type {Object}
         */

        var currentAlbum = Fixtures.getAlbum();

        /**
         * @desc Buzz object audio file
         * @type {Object}
         */
        var currentBuzzObject = null;

        /**
         * @function setSong
         * @desc Stops currently playing song and loads new audio file as currentBuzzObject
         * @param {Object} song
         */
	var setSong = function(song) {
     if (currentBuzzObject) {
         currentBuzzObject.stop();
         SongPlayer.currentSong.playing = null;
     }

     currentBuzzObject = new buzz.sound(song.audioUrl, {
         formats: ['mp3'],
         preload: true
     });

     currentBuzzObject.bind('timeupdate', function() {
         $rootScope.$apply(function() {
             SongPlayer.currentTime = currentBuzzObject.getTime();
         });
     });

     SongPlayer.currentSong = song;
 };
        /**
         * @function playSong
         * @desc Plays the currentBuzzObject and sets the property of the song Object to true
         * @param {Object} song
         */
        var playSong = function (song) {
	        if(currentBuzzObject) {
            currentBuzzObject.play();
            song.playing = true;
        	}
        };

          /**
         * @function stopSong
         * @desc stops song
         * @param {Object} song
         */

        var stopSong = function (song) {
	        currentBuzzObject.play();
	        song.playing = null;

        };
		/**
        * @function getSongIndex
        * @desc Get index of song in songs array
        * @param {Object} song
        * @returns {Number}
        */
        var getSongIndex = function(song) {
            return currentAlbum.songs.indexOf(song);
        };

        /**
         * @desc Current Buzz object audio file
         * @type {Object}
         */
        SongPlayer.currentSong = null;
		/**
         * @desc Current playback time in seconds
         * @type {Number}
         */

		Song.Player.currentTime = null;
		/**
         * @desc Volume
         * @type {Number}
         */

		 SongPlayer.volume = 80;

	  /**
         * @function SongPlayer.play
         * @desc If Song is not the same as the current then a new song will load and play. If it is the same song 		*  and its paused, then the song will play.
         * @param {Object} song
         */

        SongPlayer.play = function (song) {
            song = song || SongPlayer.currentSong;
            if (SongPlayer.currentSong !== song) {
                setSong(song);
                playSong(song);
            } else if (SongPlayer.currentSong === song) {
                if (currentBuzzObject.isPaused()) {
                    playSong(song);
                }
            }
        };

        /**
         * @function SongPlayer.pause
         * @desc Pauses the currently playing Buzz Object - sets the song's 'playing' attribute to false.
         * @param {Object} song
         */
        SongPlayer.pause = function (song) {
            song = song || SongPlayer.currentSong;
            currentBuzzObject.pause();
            song.playing = false;
        };
		/**
         * @function previous
         * @desc set song to previous song in album
         */


        SongPlayer.previous = function () {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;

            if (currentSongIndex < 0) {
                currentBuzzObject.stop();
                SongPlayer.currentSong.playing = null;
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };

        /**
         * @function next
         * @desc set song to the next song in the album
         */

       SongPlayer.next = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex++;

			var lastSongIndex = currentAlbum.songs.length - 1;

            if (currentSongIndex > lastSongIndex) {
                stopSong(songPlayer.currentSong);
            } else {
                var song = currentAlbum.songs[currentSongIndex];
                setSong(song);
                playSong(song);
            }
        };
		/**
	 * @function setCurrentTime
	 * @desc Set current time (in seconds) of currently playing song
	 * @param {Number} time
	 */
	 SongPlayer.setCurrentTime = function(time) {
	     if (currentBuzzObject) {
	         currentBuzzObject.setTime(time);
	     }
	 };

	 /**
		*@function setVolume
		*@desc set volume for song player
		*@param {Number} volume
		*/
		SongPlayer.setVolume = function(volume) {
			if (currentBuzzObject) {
				currentBuzzObject.setVolume(volume);
			}
			SongPlayer.volume = volume;
		};



        return SongPlayer;

        };

    angular
        .module('audie')
        .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);

})();
