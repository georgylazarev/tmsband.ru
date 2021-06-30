'use strict';

(function () {
    const songs = window.data.songs();
    const songsItem = document.querySelector('#songs-element').content;
    const albumsList = document.querySelector('.albums__list');
    const albums = albumsList.querySelectorAll('ul[albumid]');

    const makeSong = function (song) {
        const currentSong = songsItem.cloneNode(true);
        let songCaption = currentSong.querySelector('.songs-list__caption');
        let songFile = currentSong.querySelector('audio');
        songCaption.innerHTML = song.title;
        songFile.src = song.file;
        return currentSong;
    };

    albums.forEach((album) => {
        const currentAlbum = album.getAttribute('albumId');
        songs.forEach((song) => {
            if (song.albumId === parseInt(currentAlbum)) {
                const currentSong = makeSong(song);
                album.appendChild(currentSong);
            }
        });
    });

})();