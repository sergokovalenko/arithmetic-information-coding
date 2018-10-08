import * as algorithm from './arithmetic-information-coding.js';

window.onload = () => {
  const input = document.getElementById('message');
  const btn = document.getElementById('submit');
  const resultBlock = document.getElementById('result')

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    resultBlock.innerHTML = algorithm.getResult(input.value);
  })
};
