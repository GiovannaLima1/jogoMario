const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const startScreen = document.querySelector('.start-screen');
const startButton = document.querySelector('#start-button');

const gameOverScreen = document.querySelector('#game-over-screen');
const restartButton = document.querySelector('#restart-button');

const scoreElement = document.querySelector('#score');
const livesElement = document.querySelector('#lives');
const timeElement = document.querySelector('#time');

let loop;
let timerLoop;

let gameOver = false;

let score = 0;
let lives = 3;
let time = 300;

let pipePassed = false;

/* =========================
   ATUALIZA BARRA DE STATUS
========================= */

function updateStatus() {
    scoreElement.textContent = String(score).padStart(6, '0');
    livesElement.textContent = '× ' + lives;
    timeElement.textContent = time;
}

/* =========================
   PULO DO MARIO
   Cada pulo = +1 ponto
========================= */

const jump = () => {

    if (gameOver) {
        return;
    }

    if (!mario.classList.contains('jump')) {

        mario.classList.add('jump');

        // Adiciona 1 ponto a cada pulo
        score++;

        updateStatus();

        setTimeout(() => {

            mario.classList.remove('jump');

        }, 500);
    }
};


/* =========================
   SCORE POR PASSAGEM DO TUBO
========================= */

function checkScore() {

    const marioRect = mario.getBoundingClientRect();

    const pipeRect = pipe.getBoundingClientRect();

    /*
        Quando o Mario passar completamente
        pelo tubo, adiciona 1 ponto.
    */

    if (
        marioRect.left > pipeRect.right &&
        !pipePassed
    ) {

        score++;

        pipePassed = true;

        updateStatus();
    }


    /*
        Quando o tubo sair completamente
        da tela, libera o próximo ponto.
    */

    if (pipeRect.right < 0) {

        pipePassed = false;
    }
}


/* =========================
   GAME OVER
========================= */

function finishGame() {

    gameOver = true;

    clearInterval(loop);

    clearInterval(timerLoop);

    pipe.style.animation = 'none';

    mario.classList.remove('jump');

    mario.src = './images/game-over.png';

    mario.style.width = '75px';

    gameOverScreen.style.display = 'flex';
}


/* =========================
   VERIFICA COLISÃO
========================= */

function checkCollision() {

    const marioRect = mario.getBoundingClientRect();

    const pipeRect = pipe.getBoundingClientRect();


    /*
        Área menor de colisão do Mario
    */

    const marioMarginX = 25;

    const marioMarginY = 15;

    const marioLeft =
        marioRect.left + marioMarginX;

    const marioRight =
        marioRect.right - marioMarginX;

    const marioTop =
        marioRect.top + marioMarginY;

    const marioBottom =
        marioRect.bottom - marioMarginY;


    /*
        Área de colisão do tubo
    */

    const pipeLeft =
        pipeRect.left + 8;

    const pipeRight =
        pipeRect.right - 8;

    const pipeTop =
        pipeRect.top + 5;

    const pipeBottom =
        pipeRect.bottom;


    /*
        Verifica colisão
    */

    const collision =

        marioRight > pipeLeft &&

        marioLeft < pipeRight &&

        marioBottom > pipeTop &&

        marioTop < pipeBottom;


    if (collision) {

        finishGame();
    }
}


/* =========================
   INICIAR JOGO
========================= */

function startGame() {

    clearInterval(loop);

    clearInterval(timerLoop);

    gameOver = false;


    /*
        Reseta os valores
    */

    score = 0;

    lives = 3;

    time = 300;

    pipePassed = false;

    updateStatus();


    /*
        Esconde as telas
    */

    startScreen.style.display = 'none';

    gameOverScreen.style.display = 'none';


    /*
        Reseta o Mario
    */

    mario.src = './images/mario.gif';

    mario.style.width = '150px';

    mario.style.bottom = '0px';

    mario.classList.remove('jump');


    /*
        Reseta o tubo
    */

    pipe.style.animation = 'none';

    pipe.style.right = '-80px';


    /*
        Força o navegador a reiniciar
        a animação do tubo
    */

    void pipe.offsetWidth;


    pipe.style.animation =
        'pipe-animation 2s infinite linear';


    /* =========================
       LOOP DO JOGO
    ========================= */

    loop = setInterval(() => {

        if (!gameOver) {

            checkCollision();

            checkScore();
        }

    }, 30);


    /* =========================
       CONTADOR DE TEMPO
    ========================= */

    timerLoop = setInterval(() => {

        if (gameOver) {
            return;
        }

        if (time > 0) {

            time--;

            updateStatus();

        } else {

            finishGame();
        }

    }, 1000);
}


/* =========================
   BOTÃO INICIAR
========================= */

startButton.addEventListener('click', () => {

    startGame();
});


/* =========================
   BOTÃO REINICIAR
========================= */

restartButton.addEventListener('click', () => {

    startGame();
});


/* =========================
   TECLADO
========================= */

document.addEventListener('keydown', (event) => {

    /*
        ENTER inicia/reinicia
    */

    if (event.key === 'Enter') {

        if (gameOver) {

            startGame();

        } else if (
            startScreen.style.display !== 'none'
        ) {

            startGame();
        }

        return;
    }


    /*
        Espaço ou seta para cima
        fazem o Mario pular
    */

    if (
        event.key === ' ' ||
        event.key === 'ArrowUp'
    ) {

        event.preventDefault();

        jump();
    }
});


/* =========================
   CELULAR / TOUCH
========================= */

document.addEventListener('touchstart', () => {

    jump();
});


/* =========================
   STATUS INICIAL
========================= */

updateStatus();
``
