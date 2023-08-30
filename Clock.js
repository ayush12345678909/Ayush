const secondhand = document.getElementById('secondhand')
const minutehand = document.getElementById('minutehand')
const hourhand = document.getElementById('hourhand')


function clockTick(){
    const date = new Date();
    const seconds = date.getSeconds() / 60;
    const minutes = (seconds + date.getMinutes()) / 60;
    const hours = (minutes + date.getHours()) / 12;
    rotateClockHand(secondhand, seconds);
    rotateClockHand(minutehand, minutes);
    rotateClockHand(hourhand, hours)
}

function rotateClockHand(element, rotation) {
    element.style.setProperty("--rotate" , rotation * 360);
}

setInterval(clockTick, 1000);
