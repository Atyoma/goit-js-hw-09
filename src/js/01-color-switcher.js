const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  background: document.querySelector('body'),
};
const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

function getRandomHexColor() {
  return randomColor;
}

console.log(randomColor);

refs.start.addEventListener('click', onClickStart);
// refs.stop.addEventListener('click', onClickStop);

function onClickStart(e) {
  refs.background.style.backgroundColor = randomColor;
}
console.log(refs.background);
// function onClickStop(){}
