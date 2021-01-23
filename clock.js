const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours > 10 ? hours : `0${hours}`}:${minutes}:${seconds > 10 ? seconds : `0${seconds}`}`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
};

init();