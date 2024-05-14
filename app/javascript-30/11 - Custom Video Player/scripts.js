/* Get our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen');

/* Build our functions */
function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton(){
    toggle.textContent = this.paused ? '►' : '∥';
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function toggleFullScreen(){
    if(document.webkitFullscreenEnabled){
        document.webkitIsFullScreen ? document.webkitExitFullscreen() :  player.webkitRequestFullscreen();
    }
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', toggleFullScreen);