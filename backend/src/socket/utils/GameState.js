class GameState {
    constructor(player1Id, player2Id) {
        this.settings = {
            boardWidth: 1300,
            boardHeight: 500,
            paddleWidth: 25,
            paddleHeight: 120,
            ballRadius: 13,
            initialBallSpeed: 5,
            paddleSpeed: 40,
            speedIncrease: 1.07,
        };
        this.ball = {
            x: this.settings.boardWidth / 2,
            y: this.settings.boardHeight / 2,
            speed: this.settings.initialBallSpeed,
            direction : {
                x: 0,
                y: 0,
            }
        }
        this.paddles = {
            [player1Id]: {
                x: 0,
                y: 0,
                score: 0,
            },
            [player2Id]: {
                x: this.settings.boardWidth - this.settings.paddleWidth,
                y: this.settings.boardHeight - this.settings.paddleHeight,
                score: 0,
            }
        }
        this.isRunning = false;
        this.player1Id = player1Id;
        this.player2Id = player2Id;
        this.winner = null;
    }
    setBallDirection() {
        this.ball.direction.x = Math.random() < 0.5 ? -1 : 1;
        this.ball.direction.y = Math.random() < 0.5 ? -1 : 1;
    }
    handleBorderCollision() {
        const topCollision = this.ball.y <= this.settings.ballRadius;
        const bottomCollision = this.ball.y >= this.settings.boardHeight - this.settings.ballRadius;
        
        if (topCollision || bottomCollision) {
            this.ball.directiom.y *= -1;
        }
    }

    checkFirstPaddleCollision() {
        const paddle = this.paddles[this.player1Id];
        const xCollision = this.ball.x <= paddle.x + this.settings.ballRadius + this.settings.paddleWidth;
        const yCollision = this.ball.y >= paddle.y && this.ball.y <= paddle.y + this.settings.paddleHeight;
        return xCollision && yCollision;
    }

    checkSecondPaddleCollision() {
        const paddle = this.paddles[this.player2Id];
        const xCollision = this.ball.x >= paddle.x - this.settings.ballRadius;
        const yCollision = this.ball.y >= paddle.y && this.ball.y <= paddle.y + this.settings.paddleHeight;
        return xCollision && yCollision;
    }
}
