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
            this.ball.direction.y *= -1;
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

    handlePaddleCollision() {
        const firstPaddleCollision = this.checkFirstPaddleCollision();
        const secondPaddleCollision = this.checkSecondPaddleCollision();
        if (firstPaddleCollision || secondPaddleCollision) {
            this.ball.direction.x *= -1;
            this.ball.speed *= this.settings.speedIncrease;

            if (firstPaddleCollision) {
                this.ball.x = this.paddles[this.player1Id].x +
                    this.settings.paddleWidth + 
                    this.settings.ballRadius;
            }
            else {
                this.ball.x = this.paddles[this.player2Id].x -
                    this.settings.ballRadius;
            }
        }
    }

    handleGoal() {
        const firstPlayerGoal = this.ball.x > this.settings.boardWidth;
        const secondPlayerGoal = this.ball.x < 0;

        if (firstPlayerGoal || secondPlayerGoal) {
            if (firstPlayerGoal) {
                this.paddles[this.player1Id].score++;
            }
            else {
                this.paddles[this.player2Id].score++;
            }

            this.ball.x = this.settings.boardWidth / 2;
            this.ball.y = this.settings.boardHeight / 2;
            this.ball.speed = this.settings.initialBallSpeed;
            this.setBallDirection();

            if(this.paddles[this.player1Id].score >= 5 || this.paddles[this.player2Id].score >= 5) {
                this.winner = this.paddles[this.player1Id].score >= 5 ? this.player1Id : this.player2Id;
                this.isRunning = false;
            }
        }
    }

    moveBall() {
        this.ball.x += this.ball.direction.x * this.ball.speed;
        this.ball.y += this.ball.direction.y * this.ball.speed;
        this.handleBorderCollision();
        this.handlePaddleCollision();
        this.handleGoal();
    }

    movePaddle(playerId, direction) {
        const paddle = this.paddles[playerId];
        if(!paddle) return;
        if (direction === 'up' && paddle.y > 0) {
            paddle.y -= this.settings.paddleSpeed;
        }
        else if (direction === 'down' && paddle.y < this.settings.boardHeight - this.settings.paddleHeight) {
            paddle.y += this.settings.paddleSpeed;
        }
    }

    update(){
        if (!this.isRunning) return;
        this.moveBall();
    }
    getState() {
        return {
            ball: this.ball,
            paddles: this.paddles,
            isRunning: this.isRunning,
            winner: this.winner
        }
    }
    start() {
        this.isRunning = true;
        this.setBallDirection();
    }
    pause() {
        this.isRunning = false;
    }
    restart() {
        this.ball = {
            x: this.settings.boardWidth / 2,
            y: this.settings.boardHeight / 2,
            speed: this.settings.initialBallSpeed,
            direction : {
                x: 0,
                y: 0,
            }
        }
        this.paddles[this.player1Id].score = 0;
        this.paddles[this.player2Id].score = 0;
        this.isRunning = false;
    }
}

module.exports = GameState;