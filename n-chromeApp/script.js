// // built-in function
// // console.log(console);
// // console.log(alert);

// sayHello = (p) => {
//   console.log(`Hello! : ${p}`);
// }

// const greetWoo = sayHello('wooseok');

// const calculator = {
//   plus: (a, b) => {
//     return a + b;
//   }
// }

// const plus = calculator.plus(1, 2);

// const title = document.getElementById("title");
// console.log(title);
// title.innerHTML = " H1 title"
// console.dir(title);
// title.style.background = "red";

// console.dir(document);
// document.title = " I Own you now";

// const queryTitle = document.querySelector("#title");

// handleResize = () => console.log("I have been resized");
// window.addEventListener("resize", handleResize);

// handleClick = () => {
//   const currentColor = title.style.color;
//   console.log(`currentColor : ${currentColor} /// BASE_COLOR ${BASE_COLOR}`);
//   if (currentColor === BASE_COLOR) {
//     title.style.color = OTHER_COLOR;
//     console.log(` base => other`);
//   } else {
//     title.style.color = BASE_COLOR;
//     console.log(` other => base`);
//   }
// }
// // title.addEventListener("click", handleClick);

// // const age = prompt("How old are you");

// const BASE_COLOR = "rgb(0, 0, 255)";
// const OTHER_COLOR = "#FFFFFF";

// function init() {
//   title.style.color = BASE_COLOR;
//   title.addEventListener("mouseenter", handleClick);
// }

// init();


// handleOffline = () => {
//   console.log('disconnected');
// }
// handleOnline = () => {
//   console.log('Welcome back');
// }

// window.addEventListener("offline", handleOffline);
// window.addEventListener("online", handleOnline);

const title = document.querySelector("#title");
// ##badc58
const CLICKED_CLASS = "clicked";

handleClick = () => {
  const currentClass = title.className;
  const hasClass = title.classList;
  // if (!hasClass.contains(CLICKED_CLASS)) {
  //   title.classList.add(CLICKED_CLASS);
  // } else {
  //   title.classList.remove(CLICKED_CLASS);
  // }
  title.className.toggle(CLICKED_CLASS);
}

init = () => {
  title.addEventListener("click", handleClick);
}

init();