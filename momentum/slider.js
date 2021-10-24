function getRandomNum(min,max){
   bgNum = String(Math.floor(Math.random() * (max - min) + min)).padStart(2,'0');
   return bgNum;
};

const body =  document.querySelector('body');

function setBg(){
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
};


getRandomNum(1,20);
setBg();


