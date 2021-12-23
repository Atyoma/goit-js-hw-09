const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  backgd: document.querySelector('body'),
};

let intervalId = null;

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return randomColor;
}

refs.start.addEventListener('click', onClickStart);
refs.stop.addEventListener('click', onClickStop);

function onClickStart(e) {
  refs.start.disabled = true;
  refs.stop.disabled = false;
  intervalId = setInterval(() => {
    refs.backgd.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onClickStop(e) {
  refs.start.disabled = false;
  refs.stop.disabled = true;
  clearInterval(intervalId);
}

console.log();
