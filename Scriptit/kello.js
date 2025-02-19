function updateClock() {
    var now = new Date();
    
    var shetlandHours = now.getUTCHours();
    var shetlandMinutes = now.getUTCMinutes();
    var shetlandSeconds = now.getUTCSeconds();

    shetlandHours = shetlandHours < 10 ? '0' + shetlandHours : shetlandHours;
    shetlandMinutes = shetlandMinutes < 10 ? '0' + shetlandMinutes : shetlandMinutes;
    shetlandSeconds = shetlandSeconds < 10 ? '0' + shetlandSeconds : shetlandSeconds;

    document.getElementById('clock').innerHTML = ` 
    ${shetlandHours}:${shetlandMinutes}:${shetlandSeconds}`;
}

setInterval(updateClock, 1000);

