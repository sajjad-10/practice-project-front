const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const countdown = document.getElementById('countdown')
const year = document.getElementById('year')
const loading = document.getElementById('loading')


const currentYear = new Date().getFullYear();

/* * Set background year */
year.innerHTML = currentYear + 1

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`)

/* * Update countdown */
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24)
    const h = Math.floor(diff / 1000 / 60 / 60) % 24
    const m = Math.floor(diff / 1000 / 60) % 60
    const s = Math.floor(diff / 1000) % 60
    // console.log(d, h, m, s);
    days.innerHTML = d
    hours.innerHTML = h < 10 ? '0' + h : h
    minutes.innerHTML = m < 10 ? '0' + m : m
    seconds.innerHTML = s < 10 ? '0' + s : s
}

/* * Show spinner before countdown*/
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex'
}, 1000)

/* * Run every second */
setInterval(updateCountdown, 1000)