const mario = document.getElementById('mario');
const sun = document.getElementById('sun');
const brick = document.getElementById('brick');
const stone = document.getElementById('stone');

const sound_jump = document.getElementById('sound_jump');
const sound_hitting = document.getElementById('sound_hitting');
const sound_game_over = document.getElementById('sound_game_over');

const start = document.getElementById('start');
const modal = document.getElementById('modal');
let modalSpan = document.querySelector('.modal__span');
const modalButton = document.querySelector('.modal__button');
const startSpan = document.querySelector('#start > span');
const score = document.querySelector('#score');


sun.style.animationPlayState = 'paused';
brick.style.animationPlayState = 'paused';
stone.style.animationPlayState = 'paused';

let timerId;

let jumpProve = function () {
    document.addEventListener('keydown', jump);
};

function startGame() {

    timerId = setInterval(() => {
        modalSpan.innerHTML = ++score.innerHTML
    }, 99);

    sun.style.animationPlayState = 'running';
    stone.style.animationPlayState = 'running';
    brick.style.animationPlayState = 'running';

    if (getComputedStyle(start).getPropertyValue('display') === 'flex') {
        start.style.display = 'none';
        jumpProve();

    }
};


startSpan.addEventListener('click', startGame);

let restartFunc = () => location.reload();

let jump = function () {
    if (mario.classList != 'jump') {
        mario.classList.add('jump');
        sound_jump.play();

    }

    setTimeout(function () {
        mario.classList.remove('jump');
    }, 500)
};


let isAlive = setInterval(function () {
    let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue('top'));
    let stoneLeft = parseInt(window.getComputedStyle(stone).getPropertyValue('left'));

    if (stoneLeft < 50 && stoneLeft > 0 && marioTop >= 200) {
        sound_hitting.play();
        sound_game_over.play();
        sun.style.animationPlayState = 'paused';
        brick.style.animationPlayState = 'paused';
        stone.style.animationPlayState = 'paused';
        modal.style.display = 'flex';
        clearInterval(isAlive);
        clearInterval(timerId);

    }

}, 10)


modalButton.addEventListener('click', restartFunc);