import { GameHandlerI, GameStateI } from './gameModeI';

export class LocalGameHandler implements GameHandlerI {
  private gameUpdateCallback?: (gameState: GameStateI) => void;
  private gameEndCallback?: (result: any) => void;
  private gameLoop?: ReturnType<typeof setInterval>;
  private currentGameState: GameStateI;
  
  // Игровые переменные из game.ts
  private gameBoardWidth = 1300;
  private gameBoardHeight = 500;
  private ballRadius = 8;
  private initialBallSpeed = 7;
  private ballSpeed = this.initialBallSpeed;
  private paddleSpeed = 40;
  
  private paddleSize = {
    width: 15,
    height: 150
  };
  
  private ballDirection = {
    x: 0,
    y: 0
  };
  
  private keys = new Set<string>();
  private firstPaddleTargetY = 0;
  private secondPaddleTargetY = 0;

  constructor() {
    this.currentGameState = this.getInitialGameState();
    this.setupEventListeners();
  }

  private getInitialGameState(): GameStateI {
    const firstPaddleInitial = {
      x: 0,
      y: 0
    };
    
    const secondPaddleInitial = {
      x: this.gameBoardWidth - this.paddleSize.width,
      y: this.gameBoardHeight - this.paddleSize.height,
    };

    return {
      ball: { 
        x: this.gameBoardWidth / 2, 
        y: this.gameBoardHeight / 2 
      },
      paddles: {
        '1': { x: firstPaddleInitial.x, y: firstPaddleInitial.y, score: 0 },
        '2': { x: secondPaddleInitial.x, y: secondPaddleInitial.y, score: 0 }
      },
      isRunning: false,
      winner: undefined
    };
  }

  initGame(gameData?: any): void {
    this.currentGameState = this.getInitialGameState();
    this.ballSpeed = this.initialBallSpeed;
    this.setBallDirection();
    this.firstPaddleTargetY = this.currentGameState.paddles['1'].y;
    this.secondPaddleTargetY = this.currentGameState.paddles['2'].y;
    console.log('Local game initialized');
  }

  startGame(): void {
    this.currentGameState.isRunning = true;
    this.startLocalGameLoop();
    console.log('Local game started');
  }

  private setupEventListeners(): void {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  private handleKeyDown(ev: KeyboardEvent): void {
    const key = ev.key.toLowerCase();
    this.keys.add(key);
  }

  private handleKeyUp(ev: KeyboardEvent): void {
    const key = ev.key.toLowerCase();
    this.keys.delete(key);
  }

  private startLocalGameLoop(): void {
    this.gameLoop = setInterval(() => {
      this.updateLocalGame();
      if (this.gameUpdateCallback) {
        this.gameUpdateCallback(this.currentGameState);
      }
    }, 16); // 60 FPS
  }

  private updateLocalGame(): void {
    if (!this.currentGameState.isRunning) return;

    this.updatePaddlePositions();
    this.moveBall();
  }

  private updatePaddlePositions(): void {
    const step = this.paddleSize.height / 4;
    const lerpFactor = 0.2;

    // Первый игрок (W/S)
    if (this.keys.has("w") && this.currentGameState.paddles['1'].y > 0) {
      this.firstPaddleTargetY = Math.max(0, this.currentGameState.paddles['1'].y - step);
    }
    if (this.keys.has("s")) {
      this.firstPaddleTargetY = Math.min(
        this.gameBoardHeight - this.paddleSize.height, 
        this.currentGameState.paddles['1'].y + step
      );
    }

    // Второй игрок (Arrow Keys)
    if (this.keys.has("arrowup") && this.currentGameState.paddles['2'].y > 0) {
      this.secondPaddleTargetY = Math.max(0, this.currentGameState.paddles['2'].y - step);
    }
    if (this.keys.has("arrowdown")) {
      this.secondPaddleTargetY = Math.min(
        this.gameBoardHeight - this.paddleSize.height, 
        this.currentGameState.paddles['2'].y + step
      );
    }

    // Плавное движение ракеток
    this.currentGameState.paddles['1'].y = this.lerp(
      this.currentGameState.paddles['1'].y, 
      this.firstPaddleTargetY, 
      lerpFactor
    );
    this.currentGameState.paddles['2'].y = this.lerp(
      this.currentGameState.paddles['2'].y, 
      this.secondPaddleTargetY, 
      lerpFactor
    );
  }

  private lerp(start: number, end: number, t: number): number {
    return start * (1 - t) + end * t;
  }

  private chooseBallDirection(): boolean {
    return Math.random() < 0.5;
  }

  private setBallDirection(): void {
    if (this.chooseBallDirection()) {
      this.ballDirection.x = 1;
    } else {
      this.ballDirection.x = -1;
    }

    if (this.chooseBallDirection()) {
      this.ballDirection.y = 1;
    } else {
      this.ballDirection.y = -1;
    }
  }

  private moveBall(): void {
    this.currentGameState.ball.x += this.ballSpeed * this.ballDirection.x;
    this.currentGameState.ball.y += this.ballSpeed * this.ballDirection.y;
    
    this.handleBorderCollision();
    this.handlePaddleCollision();
    this.handleGoal();
  }

  private handleBorderCollision(): void {
    const topBallRadius = this.currentGameState.ball.y <= this.ballRadius;
    const bottomBallRadius = this.currentGameState.ball.y >= this.gameBoardHeight - this.ballRadius;
    
    if (topBallRadius || bottomBallRadius) {
      this.ballDirection.y *= -1;
    }
  }

  private checkFirstPaddleCollision(): boolean {
    const paddle = this.currentGameState.paddles['1'];
    const xCollision = this.currentGameState.ball.x <= paddle.x + this.ballRadius + this.paddleSize.width;
    const yCollision = this.currentGameState.ball.y >= paddle.y && 
                      this.currentGameState.ball.y <= paddle.y + this.paddleSize.height;
    return xCollision && yCollision;
  }

  private checkSecondPaddleCollision(): boolean {
    const paddle = this.currentGameState.paddles['2'];
    const xCollision = this.currentGameState.ball.x >= paddle.x - this.ballRadius;
    const yCollision = this.currentGameState.ball.y >= paddle.y && 
                      this.currentGameState.ball.y <= paddle.y + this.paddleSize.height;
    return xCollision && yCollision;
  }

  private handlePaddleCollision(): void {
    const firstPaddleCollision = this.checkFirstPaddleCollision();
    const secondPaddleCollision = this.checkSecondPaddleCollision();

    if (firstPaddleCollision || secondPaddleCollision) {
      this.ballSpeed *= 1.07;
      this.ballDirection.x *= -1;

      if (firstPaddleCollision) {
        this.currentGameState.ball.x = this.currentGameState.paddles['1'].x + this.paddleSize.width + this.ballRadius;
      } else if (secondPaddleCollision) {
        this.currentGameState.ball.x = this.currentGameState.paddles['2'].x - this.ballRadius;
      }
    }
  }

  private handleGoal(): void {
    const firstUserGoal = this.currentGameState.ball.x > this.gameBoardWidth;
    const secondUserGoal = this.currentGameState.ball.x < 0;

    if (!firstUserGoal && !secondUserGoal) {
      return;
    }

    if (firstUserGoal) {
      this.currentGameState.paddles['1'].score++;
    }
    if (secondUserGoal) {
      this.currentGameState.paddles['2'].score++;
    }

    // Проверяем победителя
    this.checkGameOver();

    // Сбрасываем мяч
    this.resetBall();
  }

  private checkGameOver(): void {
    const paddle1Score = this.currentGameState.paddles['1'].score;
    const paddle2Score = this.currentGameState.paddles['2'].score;

    if (paddle1Score >= 5 || paddle2Score >= 5) {
      this.currentGameState.isRunning = false;
      this.currentGameState.winner = paddle1Score >= 5 ? '1' : '2';
      
      if (this.gameEndCallback) {
        this.gameEndCallback({
          winner: this.currentGameState.winner,
          finalScore: `${paddle1Score}:${paddle2Score}`,
          gameState: this.currentGameState
        });
      }

      // Останавливаем игровой цикл
      if (this.gameLoop) {
        clearInterval(this.gameLoop);
        this.gameLoop = undefined;
      }
    }
  }

  private resetBall(): void {
    this.currentGameState.ball.x = this.gameBoardWidth / 2;
    this.currentGameState.ball.y = this.gameBoardHeight / 2;
    this.setBallDirection();
    this.ballSpeed = this.initialBallSpeed;
  }

  movePaddle(direction: 'up' | 'down', playerId: number = 1): void {
    // Эта функция не используется в локальном режиме, 
    // так как управление происходит через клавиатуру
    // Но можно оставить для совместимости с интерфейсом
    const paddle = this.currentGameState.paddles[playerId.toString()];
    if (!paddle) return;

    const speed = 40;
    if (direction === 'up' && paddle.y > 0) {
      paddle.y = Math.max(0, paddle.y - speed);
    } else if (direction === 'down' && paddle.y < this.gameBoardHeight - this.paddleSize.height) {
      paddle.y = Math.min(this.gameBoardHeight - this.paddleSize.height, paddle.y + speed);
    }
  }

  onGameUpdate(callback: (gameState: GameStateI) => void): void {
    this.gameUpdateCallback = callback;
  }

  onGameEnd(callback: (result: any) => void): void {
    this.gameEndCallback = callback;
  }

  cleanup(): void {
    if (this.gameLoop) {
      clearInterval(this.gameLoop);
      this.gameLoop = undefined;
    }
    
    // Убираем слушатели событий
    window.removeEventListener("keydown", this.handleKeyDown.bind(this));
    window.removeEventListener("keyup", this.handleKeyUp.bind(this));
    
    this.keys.clear();
    this.gameUpdateCallback = undefined;
    this.gameEndCallback = undefined;
  }

  // Дополнительные методы для получения текущего состояния
  getCurrentScore(): { player1: number; player2: number } {
    return {
      player1: this.currentGameState.paddles['1'].score,
      player2: this.currentGameState.paddles['2'].score
    };
  }

  isGameRunning(): boolean {
    return this.currentGameState.isRunning;
  }

  getWinner(): number | undefined {
    return this.currentGameState.winner ? parseInt(this.currentGameState.winner) : undefined;
  }
}