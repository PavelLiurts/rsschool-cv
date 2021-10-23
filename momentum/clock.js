function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000);
    showDate();
    return document.querySelector('.time').innerHTML=currentTime;
}

showTime ();

function showDate() {
    const date = new Date();
    const options = {month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'};
    const currentDate = date.toLocaleDateString('ru-RU', options);
    return document.querySelector('.date').innerHTML=currentDate;
}

