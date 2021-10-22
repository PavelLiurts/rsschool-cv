function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    return time.innerHTML=currentTime;
}

showTime ();