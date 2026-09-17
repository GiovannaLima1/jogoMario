# Jogo Mario

## Descrição

Projeto de um jogo inspirado no universo do Mario, desenvolvido como parte da atividade prática de Git e GitHub. O projeto utiliza HTML, CSS e JavaScript, com foco na organização do projeto, controle de versões, utilização de branches, desenvolvimento de funcionalidades e documentação.

## Objetivo

O objetivo do jogo é controlar o personagem Mario, evitar a colisão com os obstáculos que aparecem no cenário e acumular pontos durante a partida.

## Tecnologias

* HTML5
* CSS3
* JavaScript
* Node.js
* npm

## Funcionalidades

* Animação do cenário;
* Animação das nuvens;
* Movimento do obstáculo (tubo);
* Pulo do personagem;
* Controle do personagem por teclado;
* Detecção de colisão entre o Mario e o tubo;
* Interrupção do jogo quando ocorre uma colisão;
* Sistema de pontuação (Score);
* HUD para exibição das informações da partida;
* Pontuação adicionada a cada pulo realizado pelo Mario;
* Atualização dinâmica do Score durante a partida;
* Reinicialização da pontuação ao iniciar uma nova partida;
* Tela inicial para iniciar o jogo;
* Tela de Game Over após a colisão;
* Reinício do jogo após uma nova partida;
* Interface visual integrada ao cenário do jogo.

## Sistema de Pontuação

O jogo possui um sistema de pontuação exibido através da HUD.

Durante a partida, o jogador recebe pontos sempre que o Mario realiza um pulo. Dessa forma, quanto mais o jogador avançar e realizar pulos, maior será sua pontuação.

O Score é atualizado automaticamente na tela durante a partida.

A pontuação é reiniciada quando uma nova partida é iniciada.

## HUD

O jogo possui uma HUD (Heads-Up Display) integrada à interface para apresentar as informações importantes da partida.

A HUD exibe o:

* **Score:** pontuação atual do jogador.

O Score é atualizado em tempo real conforme o jogador realiza os pulos.

## Como jogar

1. Inicie o jogo seguindo as instruções de execução abaixo.
2. Utilize a tecla **Espaço** ou as teclas direcionais configuradas para fazer o Mario pular.
3. A cada pulo realizado, o jogador recebe pontos.
4. Acompanhe sua pontuação através da HUD.
5. Evite que o personagem colida com o tubo.
6. Continue realizando pulos para aumentar o Score.
7. Quando ocorre uma colisão, o jogo é interrompido e a tela de Game Over é apresentada.
8. Para iniciar uma nova partida, reinicie o jogo conforme a opção disponível na interface.

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

* Node.js
* npm

## Instalação

Entre na pasta do frontend:

```bash
cd frontend
npm install
```

## Execução

Ainda dentro da pasta `frontend`, execute:

```bash
npm run dev
```

Após iniciar o servidor, acesse no navegador o endereço informado pelo terminal, normalmente:

```text
http://localhost:3000
```

## Estrutura do projeto

```text
jogoMario/
├── backend/
├── docs/
│   ├── branding/
│   ├── mer/
│   ├── mockups/
│   ├── models/
│   │   └── uml/
│   └── requirements/
├── frontend/
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── media/
│   ├── index.html
│   └── package.json
├── .gitignore
├── LICENSE
└── README.md
```

## Integrantes

| Nome               | Matrícula | Papel         |
| ------------------ | --------- | ------------- |
| Giovanna Lima      | 01830311  | Scrum Master  |
| Gabriella Guedes   | 01847354  | Documentador  |
| Helena Silva       | 01792836  | Desenvolvedor |
| João Victor Carlos | 01802219  | Desenvolvedor |
| Luma Rodrigues     | 01833902  | Testador      |
| Willams Eduardo    | 01814383  | Testador      |

## Status dos Testes

* [x] Jogo testado e funcionando;
* [x] Sistema de pulo testado;
* [x] Detecção de colisão testada;
* [x] HUD testada;
* [x] Sistema de Score testado;
* [x] Pontuação por pulo testada;
* [x] Atualização do Score durante a partida testada;
* [x] Reinicialização da pontuação testada.
