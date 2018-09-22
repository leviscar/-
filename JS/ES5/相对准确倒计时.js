var period = 60 * 1000 * 60 *2;
var startTime = new Date().getTime();
var count = 0
var end = new Date().getTime()+period;
var interval = 1000;
var currentInterval = interval;


function loop() {
    count++;
    var offset = new Date().getTime() - (startTime + count*interval);
    var diff = end - new Date().getTime();
    var h = Math.floor(diff/(60*1000*60));
    var hdiff = diff%(60*1000*60);
    var s = mdiff/1000;
    var sCeil = Math.ceil(s);
    var sFloor = Math.floor(s);
    currentInterval = interval - offset;
    setTimeout(loop,currentInterval);
}