const date = new Date();
const hours = Number(date.getHours());
console.log(hours)


function getTimeOfDay(){
    if (hours >= 6.00 & hours <= 11.59  ) {
        return 'morning';
    }else if (hours <= 17.59 ) {
        return 'afternoon';
    }else if (hours <= 23.59 & hours <= 18.00) {
        return 'evening';
    }else {
        return 'night';
    }
};


const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}`;
const name = document.querySelector('.name');

function setLocalStorage(){
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage(){
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)


function showGreeting(){
    return document.querySelector('.greeting').innerHTML=greetingText;
}

showGreeting();