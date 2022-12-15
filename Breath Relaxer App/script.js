const container = document.getElementById('container')
const text = document.getElementById('text')
const grow = document.querySelector('.grow')
const shrink = document.querySelector('.shrink')
/*
    * totalTime : 
        if want to change this ned to change animate time in css
*/
const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation()

/*
    * 
*/
function breathAnimation() {
    text.innerText = 'Breathe In!'
    container.className = 'container grow'
    setTimeout(() => {
        text.innerText = 'Hold'
        setTimeout(() => {
            text.innerText = 'Breathe Out!'
            container.className = 'container shrink'


        }, holdTime)
    }, breatheTime)
}

setInterval(breathAnimation, totalTime)