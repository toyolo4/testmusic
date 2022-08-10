import { defineStore } from 'pinia';

export const useMusicStore = defineStore("audio", {
  state: () => {
    return{
      artist: 'NCTK',
      songName: 'Putea sa fie mult mai rau',
      index: 0,
      songs: [
        {
            artist: 'NCTK',
            songName: 'Putea sa fie mult mai rau',
            source: '/audio/0.mp3',
        },
        {
            artist: 'NCTK',
            songName: 'Moravuri',
            source: '/audio/1.mp3',
        },
        {
            artist: 'Vlad Flueraru',
            songName: 'Speranta',
            source: '/audio/2.mp3',
        },
        {
            artist: 'Vlad Flueraru',
            songName: 'Stanga-mprejur',
            source: '/audio/3.mp3',
        },
        {
            artist: 'DOC',
            songName: 'Acum',
            source: '/audio/4.mp3',
        },
        {
            artist: 'DOC',
            songName: '4 Jumate',
            source: '/audio/5.mp3',
        },
        {
            artist: 'JID',
            songName: 'Working Out',
            source: '/audio/6.mp3',
        },
        {
            artist: 'JID',
            songName: 'Off the Zoinkys',
            source: '/audio/7.mp3',
        },
        {
            artist: 'J. Cole',
            songName: 'pride.is.the.devil',
            source: '/audio/8.mp3',
        },
    ]
    }
  },
  getters: {
  },
  actions: {
    setCurrentSong(i) { 
      this.index = i
      this.artist = this.songs[i].artist,
      this.songName = this.songs[i].songName
  },
  },
});
