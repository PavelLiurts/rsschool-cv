let randomNum;

function getRandomNum(min,max){
   bgNum = String(Math.floor(Math.random() * (max - min) + min)).padStart(2,'0');
   randomNum = bgNum;
   return bgNum;
};

const body =  document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

function setBg(){
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
};

function getSlideNext(){
    randomNum = Number(randomNum)  + 1;
    randomNum = String(randomNum).padStart(2,'0');
    if (Number(randomNum) == 21){
        randomNum = '01';
    }

    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`
}

function getSlidePrev() {
    randomNum = Number(randomNum)  - 1;
    randomNum = String(randomNum).padStart(2,'0');
    if (Number(randomNum) == 0){
        randomNum = '20';
    }

    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`

}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


getRandomNum(1,20);
setBg();
console.log(slideNext)


