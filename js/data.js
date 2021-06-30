'use strict';

(function () {
    window.data = {
        albums() {
            const ourAlbums = [
                {
                    'albumId' : 1,
                    'caption' : 'Нулевые',
                    'cover' : 'img/nuleviye.jpg',
                    'alt' : 'Обложка альбома Нулевые',
                    'year' : '2018'
                },
                {
                    'albumId' : 2,
                    'caption' : 'Держава',
                    'cover' : 'img/derzhava.jpg',
                    'alt' : 'Обложка альбома Держава',
                    'year' : '2019'
                }
            ];
            return ourAlbums;
        },
        songs() {
            const ourSongs = [
                {
                    'title' : 'Град Петра',
                    'albumId' : 1,
                    'songNumber' : 1,
                    'file' : 'audio/nulevye/grad.mp3'
                },
                {
                    'title' : 'Пативен',
                    'albumId' : 1,
                    'songNumber' : 2,
                    'file' : 'audio/nulevye/partyvan.mp3'
                },
                {
                    'title' : 'Нулевые',
                    'albumId' : 1,
                    'songNumber' : 3,
                    'file' : 'audio/nulevye/nulevye.mp3'
                },
                {
                    'title' : 'С.С.С.',
                    'albumId' : 2,
                    'songNumber' : 1,
                    'file' : 'audio/derzhava/sss.mp3'
                },
                {
                    'title' : '[НЕ]песня',
                    'albumId' : 2,
                    'songNumber' : 2,
                    'file' : 'audio/derzhava/nepesnya.mp3'
                },
                {
                    'title' : 'Жги!',
                    'albumId' : 2,
                    'songNumber' : 3,
                    'file' : 'audio/derzhava/zhgi.mp3'
                },
                {
                    'title' : 'Держава',
                    'albumId' : 2,
                    'songNumber' : 4,
                    'file' : 'audio/derzhava/derzhava.mp3'
                },
                {
                    'title' : 'Жизнь',
                    'albumId' : 2,
                    'songNumber' : 5,
                    'file' : 'audio/derzhava/zhizn.mp3'
                }
            ];
            return ourSongs;
        }
    };
})();