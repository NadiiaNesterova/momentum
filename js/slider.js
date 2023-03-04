//Смена фонового изображения
function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    const arr = ['night', 'morning', 'afternoon', 'evening'];
    return arr[Math.floor(hours / 6)]
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randomNum = getRandomNum(1, 20);
function setBg() {
    const timeOfDay = getTimeOfDay();
    const bgNum = randomNum.toString().padStart(2, "0");
    const image = new Image();
    const url = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    image.onload = () => {
        document.body.style.backgroundImage = `url(${url})`;
    };
    image.src = url;
}
setBg();

const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev')
function getSlideNext() {
    randomNum++;
    if (randomNum > 20) {
        randomNum = 1;
    }
    setBg()
};

function getSlidePrev() {
    randomNum--;
    if (randomNum < 1) {
        randomNum = 20;
    }
    setBg()
};

slideNext.addEventListener('click', getSlideNext)
slidePrev.addEventListener('click', getSlidePrev)

