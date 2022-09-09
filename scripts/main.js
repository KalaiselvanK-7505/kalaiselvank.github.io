// Get the root element
var r = document.querySelector(":root");

// Getter from style
var rs = getComputedStyle(r)

// Setter to style
r.style.setProperty('--screen_width', screen.width);
r.style.setProperty('--screen_height', screen.height);
r.style.setProperty('--body_width', scroll.width);
r.style.setProperty('--body_height', scroll.height);
r.style.setProperty('--bg-color-g900', "#ff5000");

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clktxt').innerHTML =  h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
}