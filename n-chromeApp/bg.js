const body = document.querySelector('body');

const IMG_NUMBER = 3;

// handleImgLoad = () => {
//   console.log(`image loaded`)
// }

paintImage = (imgNumber) => {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
  // if it comes from API
  // image.addEventListener("loadend", handleImgLoad);
}

getRandomNumber = () => {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

init = () => {
  const randdomNumber = getRandomNumber();
  paintImage(randdomNumber);
}

init();