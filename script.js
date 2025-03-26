let score = 0;

const button = document.querySelector('#myButton');
const scoreDisplay = document.querySelector('#score');

button.addEventListener('click', (event) => {
    score++;
    scoreDisplay.innerText = `${score}`;
});