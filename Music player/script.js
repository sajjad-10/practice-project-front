let musics = [
    {
        name: "Cherry Tree - The National",
        audio: new Audio("./assets//musics/music-1.mp3"),
        cover: "assets/image/cover-1.jpeg",
    },
    {
        name: "About Today - The National",
        audio: new Audio("./assets//musics/music-2.mp3"),
        cover: "assets/image/cover-1.jpeg",
    },
    {
        name: "All the Wine - The National",
        audio: new Audio("./assets//musics/music-3.mp3"),
        cover: "assets/image/cover-1.jpeg",
    },
];

let range = document.querySelector("#music-time");
let prevBtn = document.querySelector("#pre-btn");
let playBtn = document.querySelector("#play-btn");
let nextBtn = document.querySelector("#next-btn");
let musicCover = document.querySelector("#music-cover");
let musicName = document.querySelector("#music-name");

let currentMusic = 0;

let audio = musics[currentMusic].audio;
musicCover.src = musics[currentMusic].cover;
musicName.innerText = musics[currentMusic].name;

audio.addEventListener("canplay", () => {
    range.max = audio.duration;
});
audio.addEventListener("timeupdate", () => {
    range.value = audio.currentTime;
});
range.addEventListener("input", () => {
    audio.currentTime = range.value;
});

playBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        musicCover.style.animationPlayState = "running";
        playBtn.classList.replace("fa-play", "fa-pause");
    } else {
        audio.pause();
        musicCover.style.animationPlayState = "paused";
        playBtn.classList.replace("fa-pause", "fa-play");
    }
});
nextBtn.addEventListener("click", () => {
    changeMusic("next");
});
prevBtn.addEventListener("click", () => {
    changeMusic("prev");
});

function changeMusic(state) {
    audio.pause();
    range.value = 0;
    musicCover.style.animationPlayState = "paused";
    playBtn.classList.replace("fa-pause", "fa-play");
    audio.currentTime = 0;
    if (state == "next") {
        if (currentMusic == musics.length - 1) {
            currentMusic = 0;
        } else {
            currentMusic += 1;
        }
    } else {
        if (currentMusic == 0) {
            currentMusic = musics.length - 1;
        } else {
            currentMusic -= 1;
        }
    }

    audio = musics[currentMusic].audio;
    musicCover.src = musics[currentMusic].cover;
    musicName.innerText = musics[currentMusic].name;

    audio.addEventListener("timeupdate", () => {
        range.value = audio.currentTime;
    });
}
