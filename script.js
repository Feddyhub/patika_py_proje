function showus(ad)
{

    document.getElementById("hosgeldin").innerText ="Tekrardan Hosgeldin "+ad;
}

ad =prompt("lutfen adinizi giriniz: ")
showus(ad)
function get_clock()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Tek basamaklı sayılar için başa '0' eklenir
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    let currentTime = hours +":" + minutes + ":"+ seconds;
    document.getElementById('clock').innerText = currentTime;
}
// Saat formatı oluşturulur

setInterval(get_clock, 1000); 