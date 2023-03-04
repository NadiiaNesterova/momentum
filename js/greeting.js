
//приветствие
function showGreeting(lang) {
    const hours = new Date().getHours();
    if (lang === 'en') {
        if (hours >= 0 && hours < 6) {
            greeting = ('Good night');
        }
        else if (hours >= 6 && hours < 12) {
            greeting = ('Good morning');
        }
        else if (hours >= 12 && hours < 18) {
            greeting = ('Good afternoon');
        }
        else if (hours >= 18 && hours < 24) {
            greeting = ('Good evening');
        }
    }
    if (lang === 'ru') {
        if (hours >= 0 && hours < 6) {
            greeting = ('Доброй ночи');
        }
        else if (hours >= 6 && hours < 12) {
            greeting = ('Доброе утро');
        }
        else if (hours >= 12 && hours < 18) {
            greeting = ('Добрый день');
        }
        else if (hours >= 18 && hours < 24) {
            greeting = ('Добрый вечер');
        }
    }
    document.getElementById("greeting1").innerHTML = greeting;
    setInterval(showGreeting, 1000);
}
showGreeting('en');

//Ввести имя
const user = document.querySelector('.name');
function setLocalStorage() {
    localStorage.setItem('user', user.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
    if (localStorage.getItem('user')) {
        user.value = localStorage.getItem('user');
    }
}
window.addEventListener('load', getLocalStorage)


function translatePlaceholderName(lang) {
    lang === 'en' ? user.placeholder = '[Enter name]' : user.placeholder = '[Введите имя]'; 
}
translatePlaceholderName ('en');


