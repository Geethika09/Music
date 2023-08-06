const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const skipBtn = document.getElementById('skip-btn');

const songs = [
  'song1.mp3',
  'song2.mp3',
  'song3.mp3',
  'song4.mp3',
  'song5.mp3'
];
let currentSongIndex = 0;

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

skipBtn.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = songs[currentSongIndex];
  audio.play();
});
