const langBtns = document.querySelectorAll('.lang_btn');

langBtns.forEach((e) => {
    e.onchange = clickRadio;
})

let lang = 'en';

function clickRadio() {
    getTimeOfDay(this.value);
    showGreeting(this.value);
    translatePlaceholderName(this.value);
    getWeather(this.value);
    showDate(this.value);
    setTitleTodo(this.value);
    getQuotes(this.value);
    translateBtn(this.value);
    lang = this.value;
}

//перевод кнопки
let btnEn = document.querySelector(".btn-en");
let btnRu = document.querySelector(".btn-ru");

function translateBtn(lang) {
    if (lang === 'ru') {
        btnEn.textContent = 'Английский';
        btnRu.textContent = 'Русский';
    } else {
        btnEn.textContent = 'English';
        btnRu.textContent = 'Russian';    
    }  
    
}
translateBtn('en');

