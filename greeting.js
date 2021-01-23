const form = document.querySelector(".js-form");
const greeting = document.querySelector(".js-greetings");
const input = form.querySelector("input");

const USER_LOCAL_STORAGE = "user";
const SHOWING_CN = "showing";


function saveName(text){
    localStorage.setItem(USER_LOCAL_STORAGE, text);
}

function handleSubmit(event){
     event.preventDefault();
     const currentValue = input.value;
     saveName(currentValue);
     paintGreeting(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LOCAL_STORAGE);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();