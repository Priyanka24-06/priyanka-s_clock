var clock = document.geti('clock');
var hexColor = document.geti('hex-color');

function hexClock(){
    var time = new Date();
    var hours = time.getHours().toString();
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();

/*
if(hours.length < 2){
    hours = '0' + hours;
}

if(minutes.length < 2){
    minutes = '0' + minutes;
}

if(seconds.length < 2){
    seconds = '0' + seconds;
}

var clockStr = hours +':' + minutes + ':' + seconds;
var hexColorStr = '#' + hours + minutes + seconds;

clock.textcontent = clockStr;
hexColor.textContent = hexColorStr;
document.body.style.backgroundColor = hexColorStr;

}*/

hexClock()
    setInterval(hexClock, 59000);*/
