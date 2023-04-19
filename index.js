// let clockColor = '#000000';
// let backgroundColor = 'FFFDDD';

let clockColor = '#0F0';
let backgroundColor = '#000';

// background krāsas nomaiņa pēc iestatījumiem
window.addEventListener("load",function() { changeColors(backgroundColor, clockColor) });

let canvas = document.getElementById("clockcanva");
let ctx = canvas.getContext("2d");
ctx.translate(175, 175);

let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function drawClock(){
    const d = new Date();
    let ms = d.getMilliseconds();
    let sec = d.getSeconds();
    let min = d.getMinutes();
    let hr = d.getHours();

    ctx.fillStyle = clockColor;
    ctx.strokeStyle = clockColor;

    ctx.setTransform(1, 0, 0, 1, 175, 175);
    ctx.clearRect(-175,-175,350,350);
    
    // clock outline


    // ctx.beginPath();
    // ctx.arc(0,0,170,0,2*Math.PI);
    // ctx.lineWidth = 10;
    // ctx.stroke();


    // little dot in center

    ctx.beginPath();
    ctx.arc(0,0,5,0,2*Math.PI);
    ctx.fill();


    // move origin to center

    

    // draw larger 'thingies'

    for(let i = 0; i < 12; i++){
        ctx.rotate(30 * Math.PI / 180);
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.moveTo(142,0);
        ctx.lineTo(162,0);
        ctx.stroke();
    }


    // draw smaller 'thingies'

    for(let i = 0; i < 60; i++){
        ctx.rotate(6 * Math.PI / 180);
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.moveTo(150,0);
        ctx.lineTo(162,0);
        ctx.stroke();
    }

    // draw and rotate hour hand
    
    ctx.setTransform(1, 0, 0, 1, 175, 175);
    ctx.rotate((hr + min / 60) * 30 * Math.PI / 180);
    ctx.fillRect(-5,0,10,-90)

    // draw and rotate minute hand

    ctx.setTransform(1, 0, 0, 1, 175, 175);
    ctx.rotate((min + sec / 60) * 6 * Math.PI / 180);
    ctx.fillRect(-5,0,10,-120)

    // draw and rotate second hand

    ctx.fillStyle = "#FF0000";

    ctx.beginPath();
    ctx.arc(0,0,3,0,2*Math.PI);
    ctx.fill();

    ctx.setTransform(1, 0, 0, 1, 175, 175);
    ctx.rotate((sec + ms/1000) * 6 * Math.PI / 180);
    ctx.fillRect(-2,0,4,-130)

    // console.log(sec + ms /1000);
    
    switch(d.getDate){
        case 1:
            var dayEnd = "st";
            break;
        case 2:
            var dayEnd = "nd";
            break;
        case 3:
            var dayEnd = "rd";
            break;
        default: 
            var dayEnd = "th";
            break;
    }


    datums.innerHTML =
    weekday[d.getDay()] + " " +
    d.getDate() + dayEnd + " " +
    months[d.getMonth()] + " " +
    (d.getYear() + 1900) + " " +
    hr + ':' +
    (String(min).padStart(2, '0')) + ':' +
    (String(sec).padStart(2, '0'));
}

function changeColors(bgColor, altColor) {
    document.body.style.background = bgColor;
    document.getElementById("datums").style.color = altColor;
}

// drawClock();
setInterval(drawClock, 16);