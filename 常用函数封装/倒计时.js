//倒计时
var time = document.querySelector('#time');
var timer = null;
var count = 0;
var start = document.querySelector('#start');
var stop = document.querySelector('#stop');
var reset = document.querySelector('#reset');
start.onclick = function () {
    timer = setInterval(function () {
        count++;
        time.innerHTML = count;
    }, 1000);
}
stop.onclick = function () {
    clearInterval(timer);
}
reset.onclick = function () {
    count = 0;
    time.innerHTML = count;
}