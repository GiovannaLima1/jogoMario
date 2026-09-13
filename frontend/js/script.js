const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let loop;
let gameOver = false;

const jump = () => {
    if (gameOver) return;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const startGame = () => {
    gameOver = false;

    mario.src = './images/mario.gif';
    mario.style.width = '150px';
    mario.style.bottom = '0px';
    mario.style.animation = '';
    
    pipe.style.right = '-80px';
    pipe.style.animation = 'none';

    // Reinicia a animação do tubo
    void pipe.offsetWidth;
    pipe.style.animation = '';

    loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;

        const marioPosition =
            +window.getComputedStyle(mario).bottom.replace('px', '');

        if (
            pipePosition <= 150 &&
            pipePosition > 0 &&
            marioPosition < 80
        ) {
            pipe.style.animation = 'none';
            pipe.style.right = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = './images/game-over.png';
            mario.style.width = '75px';

            gameOver = true;
            clearInterval(loop);
        }
    }, 10);
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && gameOver) {
        startGame();
        return;
    }

    jump();
});

document.addEventListener('touchstart', jump);

startGame();