const clockContainer = document.querySelector(".js-clock"),
  clockTItle = clockContainer.querySelector("h1");


function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  // const seconds = date.getSeconds();
  clockTItle.innerText = `${getTwoNumber(hours)}:${getTwoNumber(minutes)}`;
}

function getTwoNumber(t) {
  return t < 10 ? `0${t}` : t;
}

function init() {
  setInterval(getTime, 1000);
  getTime();
}

init();