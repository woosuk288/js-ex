const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const INITIAL_SIZE = 500;

let painting = false;
let filling = false;

canvas.width = INITIAL_SIZE;
canvas.height = INITIAL_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, INITIAL_SIZE, INITIAL_SIZE);

ctx.strokeStyle = INITIAL_COLOR;
ctx.lineWidth = 5.0;
ctx.fillStyle = INITIAL_COLOR;

stopPainting = () => {
  painting = false;
  console.log(`stopPainting : ${painting}`)
}
startPainting = () => painting = true;
onMouseMove = (e) => {
  if (filling === true) return;
  const x = e.offsetX;
  const y = e.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);

  } else {
    ctx.lineTo(x, y);
    // ctx.closePath();
    ctx.stroke();
  }

  // console.log(x, y)
}

handleColorClick = (e) => {
  // console.log(e.target.style);
  const color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}
handnleRangeChange = (e) => {
  console.log(e)
  const size = e.target.value;
  ctx.lineWidth = size;
}
handleModeClick = () => {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill"
  } else {
    filling = true;
    mode.innerText = "Painting";
  }
}
handleCanvasClick = () => {
  filling && ctx.fillRect(0, 0, INITIAL_SIZE, INITIAL_SIZE);
}
handleCM = (e) => {
  e.preventDefault();
}
handleSaveClick = () => {
  const image = canvas.toDataURL(); //"image/jpeg"
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJSImage";
  console.log(link);
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if (range) {
  range.addEventListener("input", handnleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick)
}