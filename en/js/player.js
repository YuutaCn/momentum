"use strict";
const body = document.body;
const player = document.querySelector(".player");
const playerHeight = document.querySelector(".player-full__hide-button")
const playerHeader = player.querySelector(".player__header");
const playerControls = player.querySelector(".player__controls");
const playerPlayList = player.querySelectorAll(".player__song");
const playerSongs = player.querySelectorAll(".audio");
const playButton = player.querySelector(".play");
const nextButton = player.querySelector(".next");
const backButton = player.querySelector(".back");
const playlistButton = player.querySelector(".playlist");
const slider = player.querySelector(".slider");
const sliderContext = player.querySelector(".slider__context");
const sliderName = sliderContext.querySelector(".slider__name");
const sliderTitle = sliderContext.querySelector(".slider__title");
const sliderContent = slider.querySelector(".slider__content");
const sliderContentLength = playerPlayList.length - 1;
const sliderWidth = 100;
let left = 0;
let count = 0;
let song = playerSongs[count];
let isPlay = false;
const pauseIcon = playButton.querySelector("img[alt = 'pause-icon']");
const playIcon = playButton.querySelector("img[alt = 'play-icon']");
const progres = player.querySelector(".progres");
const progresFilled = progres.querySelector(".progres__filled");
let isMove = false;
let openPlaylist = false

function openPlayer() {
  if (openPlaylist === true) {
    player.style.transition = 'all 400ms ease-in';
    playerHeight.style.transition = 'all400ms ease-out';
    playerHeight.style.opacity = '1';
    playerHeight.style.visibility = 'visible';
    player.style.height = '110px';
    openPlaylist = false;
  } else {
    player.style.transition = 'all 400ms ease-out';
    playerHeight.style.transition = 'all 400ms ease-in';
    playerHeight.style.opacity = '0';
    playerHeight.style.visibility = 'hidden';
    player.style.height = '300px';
    openPlaylist = true;
  }
}
 
let playerHeightStatus = true;
playerHeight.addEventListener('click', () => {
  if (playerHeightStatus === true) {
  player.style.transition = 'all 400ms ease-in';
    player.style.height = '110px';
    player.style.width = '105px';
    playerControls.style.transition = 'all 400ms ease-in';
    playerControls.style.transform = 'translateX(50em)'
    playerHeightStatus = false;
  } else {
    player.style.transition = 'all 400ms ease-in';
    player.style.height = '110px';
    player.style.width = '370px';
    playerControls.style.transition = 'all 400ms ease-out 200ms';
    playerControls.style.transform = 'translateX(0em)'
    playerHeightStatus = true;
  }


})

openPlayer()

function closePlayer() {
  playerHeader.classList.remove("open-header");
  playerControls.classList.remove("move");
  slider.classList.remove("open-slider");
}

function next(index) {
  count = index || count;
  if (count == sliderContentLength) {
    count = -1;
    sliderContent.style.transform = `translate3d(0%, 0, 0)`;
  }
  left = (count + 1) * sliderWidth;
  left = Math.min(left, (sliderContentLength) * sliderWidth);
  sliderContent.style.transition = 'all 400ms ease-out';
  sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
  count++;
  run();
}

function back(index) {
  count = index || count;
  if (count == 0) {
    count = sliderContentLength + 1;
    sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
  }
  left = (count - 1) * sliderWidth;
  left = Math.max(0, left);
  sliderContent.style.transition = 'all 400ms ease-out'
  sliderContent.style.transform = `translate3d(-${left}%, 0, 0)`;
  count--;
  run();
}

function changeSliderContext() {
  sliderContext.style.animationName = "opacity";
  sliderName.textContent = playerPlayList[count].querySelector(".player__title").textContent;
  sliderTitle.textContent = playerPlayList[count].querySelector(".player__song-name").textContent;

  if (sliderName.textContent.length > 16) {
    const textWrap = document.createElement("span");
    textWrap.className = "text-wrap";
    textWrap.innerHTML = sliderName.textContent + "   " + sliderName.textContent;
    sliderName.innerHTML = "";
    sliderName.append(textWrap);
  }

  if (sliderTitle.textContent.length >= 18) {
    const textWrap = document.createElement("span");
    textWrap.className = "text-wrap";
    textWrap.innerHTML = sliderTitle.textContent + "    " + sliderTitle.textContent;
    sliderTitle.innerHTML = "";
    sliderTitle.append(textWrap);
  }

}

function selectSong() {
  song = playerSongs[count];
  for (const item of playerSongs) {
    if (item != song) {
      item.pause();
      item.currentTime = 0;
    }
  }
  if (isPlay) song.play();
}

function run() {
  changeSliderContext();
  selectSong();
}

function playSong() {
  if (song.paused) {
    song.play();
    playIcon.style.display = "none";
    pauseIcon.style.display = "block";
    playButton.style.animation = 'scaleAnimPlayer 1500ms infinite'
  } else {
    song.pause();
    isPlay = false;
    playIcon.style.display = "";
    pauseIcon.style.display = "";
    playButton.style.animation = 'none'
  }
}

function progresUpdate() {
  const progresFilledWidth = (this.currentTime / this.duration) * 100 + "%";
  progresFilled.style.transition = 'all 200ms ease-out'
  progresFilled.style.width = progresFilledWidth;
  if (isPlay && this.duration == this.currentTime) {
    next();
  }
  if (count == sliderContentLength && song.currentTime == song.duration) {
    playIcon.style.display = "block";
    pauseIcon.style.display = "";
    isPlay = false;
  }
}

function scurb(e) {
  const currentTime = ((e.clientX - progres.getBoundingClientRect().left) / progres.offsetWidth) * song.duration;
  song.currentTime = currentTime;
}

function durationSongs() {
  let min = parseInt(this.duration / 60);
  if (min < 10) min = "0" + min;
  let sec = parseInt(this.duration % 60);
  if (sec < 10) sec = "0" + sec;
  const playerSongTime = `${min}:${sec}`;
  this.closest(".player__song").querySelector(".player__song-time").append(playerSongTime);
}


changeSliderContext();
sliderContext.addEventListener("click", openPlayer);
sliderContext.addEventListener("animationend", () => sliderContext.style.animationName = '');
playlistButton.addEventListener("click", closePlayer);

nextButton.addEventListener("click", () => {
  next(0)
  nextButton.style.transition = 'all 200ms ease-in';
  nextButton.style.transform = 'scale(0.9, 0.9)';
  setTimeout(() => {
    nextButton.style.transition = 'all 100ms ease-out';
    nextButton.style.transform = 'scale(1, 1)';
    setTimeout(() => {
      nextButton.style.transition = 'all 100ms ease-in';
      nextButton.style.transform = 'scale(0.97, 0.97)';
      setTimeout(() => {
        nextButton.style.transition = 'all 150ms ease-out';
        nextButton.style.transform = 'scale(1, 1)';
      }, 200);
    }, 100);
  }, 200);
});

backButton.addEventListener("click", () => {
  back(0)
  backButton.style.transition = 'all 200ms ease-in';
  backButton.style.transform = 'scale(0.9, 0.9)';
  setTimeout(() => {
    backButton.style.transition = 'all 100ms ease-out';
    backButton.style.transform = 'scale(1, 1)';
    setTimeout(() => {
      backButton.style.transition = 'all 100ms ease-in';
      backButton.style.transform = 'scale(0.97, 0.97)';
      setTimeout(() => {
        backButton.style.transition = 'all 150ms ease-out';
        backButton.style.transform = 'scale(1, 1)';
      }, 200);
    }, 100);
  }, 200);
});

playButton.addEventListener("click", () => {
  isPlay = true;
  playSong();
});

playerSongs.forEach(song => {
  song.addEventListener("loadeddata", durationSongs);
  song.addEventListener("timeupdate", progresUpdate);
});

progres.addEventListener("pointerdown", (e) => {
  scurb(e);
  isMove = true;
});

document.addEventListener("pointermove", (e) => {
  if (isMove) {
    scurb(e);
    song.muted = true;
  }
});

document.addEventListener("pointerup", () => {
  isMove = false;
  song.muted = false;
});

playerPlayList.forEach((item, index) => {

  item.addEventListener("click", function () {
    if (index > count) {
      next(index - 1);
      playSong()
      return;
    }
    if (index < count) {
      back(index + 1);
      playSong()
      return;
    }
  });
});