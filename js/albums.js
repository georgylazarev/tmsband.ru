'use strict';

(function () {
    const albums = window.data.albums();
    const albumsList = document.querySelector('.albums__list');
    const albumsItem = document.querySelector('#albums-element').content;

    albumsList.innerHTML = null;
    albums.forEach((album) => {
        const currentAlbum = albumsItem.cloneNode(true);
        const currentAlbumSongs = currentAlbum.querySelector('.songs-list');
        currentAlbumSongs.setAttribute('albumID', album.albumId);
        let currentAlbumItem = currentAlbum.querySelector('.albums__title');
        let currentAlbumCover = currentAlbum.querySelector('.albums__cover');
        currentAlbumItem.innerHTML = album.caption;
        currentAlbumCover.src = album.cover;
        currentAlbumCover.alt = album.alt;
        albumsList.appendChild(currentAlbum);
    });
})();