const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

let loop;
let gameOver = false;
const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('#start-button');
const gameOverScreen = document.querySelector('#game-over-screen');
const restartButton = document.querySelector('#restart-button');


const jump = () => {
    if (gameOver) return;

    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
};

const startGame = () => {
    gameOver = false;
    startScreen.style.display = 'none';
    gameOverScreen.style.display = 'none';

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
        const marioRect = mario.getBoundingClientRect();
        const pipeRect = pipe.getBoundingClientRect();

        // Criamos uma margem para encolher a "caixa invisível" do Mario
        const margem = 25; 

        if (
            (marioRect.right - margem) > pipeRect.left &&
            (marioRect.left + margem) < pipeRect.right &&
            (marioRect.bottom - margem) > pipeRect.top &&
            (marioRect.top + margem) < pipeRect.bottom
        ) {
            pipe.style.animation = 'none';
            mario.style.animation = 'none';
            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            gameOver = true;
            gameOverScreen.style.display = 'flex';
            clearInterval(loop);
        }
    }, 10);
};
startButton.addEventListener('click', startGame);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (gameOver) {
            startGame();
        } else if (startScreen.style.display !== 'none') {
            startGame();
        }
        return;
    }
    jump();
});

document.addEventListener('touchstart', jump);
restartButton.addEventListener('click', startGame);


