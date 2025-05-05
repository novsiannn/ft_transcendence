import { navigationHandle } from "../../elements/nagivation";


export function handleGame(mainWrapper: HTMLDivElement | undefined) {
	navigationHandle();
	const scoreInfo = document.querySelector("#score-info");
	const gameBoard = document.getElementById("game-board") as HTMLCanvasElement;
	const restartBtn = document.querySelector("#restart-btn");
	// const mainWrapper = document.getElementById('game-container') as HTMLDivElement;
	let intervalID: ReturnType<typeof setInterval>;
	let isGameRunning = false;
	let isWaitingForStart = false;
	let gameStartedOnce = false;

	mainWrapper!.id = "game-container";
	mainWrapper!.classList.add("h-screen", "flex", "flex-col", "gap-2.5", "justify-center", "items-center");
	const context = gameBoard?.getContext("2d");

	const gameBoardColor = window.getComputedStyle(gameBoard).backgroundColor;
	const firstPaddleColor = "white";
	const secondPaddleColor = "white";
	const ballColor = "white";

	const gameBoardWidth = gameBoard.width;
	const gameBoardHeight = gameBoard.height;

	const moveFirstPaddleKey = {
		up: "w",
		down: "s",
	}

	const moveSecondPaddleKey = {
		up: "ArrowUp",
		down: "ArrowDown"
	}

	const paddleSize = {
		width: 25,
		height: 120
	}

	const ballRadius = 13;
	const initialBallSpeed = 5;
	let ballSpeed = initialBallSpeed;
	const paddleSpeed = 40;
	let firstPlayerScore = 0;
	let secondPlayerScore = 0;

	const firstPaddleInitial = {
		x: 0,
		y: 0
	}

	const secondPaddleInitial = {
		x: gameBoardWidth - paddleSize.width,
		y: gameBoardHeight - paddleSize.height,
	}

	let firstPaddle = { ...firstPaddleInitial };
	let secondPaddle = { ...secondPaddleInitial };

	const ballInitial = {
		x: gameBoardWidth / 2,
		y: gameBoardHeight / 2,
	}

	let ball = { ...ballInitial };
	const ballDirection = {
		x: 0,
		y: 0,
	}

	function drawBoard() {
		context!.fillStyle = gameBoardColor;
		context!.fillRect(0, 0, gameBoardWidth, gameBoardHeight);
	}

	function drawPaddle(paddleX: number, paddleY: number, color: string) {
		context!.fillStyle = color;
		context!.fillRect(paddleX, paddleY, paddleSize.width, paddleSize.height);
	}

	function drawPaddles() {
		drawPaddle(firstPaddle.x, firstPaddle.y, firstPaddleColor);
		drawPaddle(secondPaddle.x, secondPaddle.y, secondPaddleColor);
	}

	function drawBall() {
		context!.beginPath();
		context!.fillStyle = ballColor;
		context!.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
		context!.fill();
	}

	function chooseBallDirection() {
		return Math.random() < 0.5;
	}

	function setBallDirection() {
		if (chooseBallDirection()) {
			ballDirection.x = 1;
		} else {
			ballDirection.x = -1;
		}

		if (chooseBallDirection()) {
			ballDirection.y = 1;
		} else {
			ballDirection.y = -1;
		}
	}

	function handleBorderCollision() {
		const topBallRadius = ball.y <= ballRadius;
		const bottomBallRadius = ball.y >= gameBoardHeight - ballRadius;
		if (topBallRadius || bottomBallRadius) {
			ballDirection.y *= -1;
		}
	}

	function checkFirstPaddleCollision() {
		const xCollision = ball.x <= firstPaddle.x + ballRadius + paddleSize.width;
		const yCollision = ball.y >= firstPaddle.y && ball.y <= firstPaddle.y + paddleSize.height;
		return xCollision && yCollision;
	}

	function checkSecondPaddleCollision() {
		const xCollision = ball.x >= secondPaddle.x - ballRadius;
		const yCollision = ball.y >= secondPaddle.y && ball.y <= secondPaddle.y + paddleSize.height;
		return xCollision && yCollision;
	}

	function handlePaddleCollision() {
		const firstPaddleCollision = checkFirstPaddleCollision();
		const secondPaddleCollision = checkSecondPaddleCollision();

		if (firstPaddleCollision || secondPaddleCollision) {
			ballSpeed *= 1.07;
			ballDirection.x *= -1;
		} else {
			return;
		}
		if (firstPaddleCollision) {
			ball.x = firstPaddle.x + paddleSize.width + ballRadius;
		} else if (secondPaddleCollision) {
			ball.x = secondPaddle.x - ballRadius;
		}
	}

	function moveBall() {
		ball.x += ballSpeed * ballDirection.x;
		ball.y += ballSpeed * ballDirection.y;
		handleBorderCollision();
		handlePaddleCollision();
		handleGoal();
	}

	function updateScore() {
		scoreInfo!.textContent = `${firstPlayerScore} : ${secondPlayerScore}`
	}

	function handleGoal() {
		const firstUserGoal = ball.x > gameBoardWidth;
		const secondUserGoal = ball.x < 0;

		if (!firstUserGoal && !secondUserGoal) {
			return;
		}
		if (firstUserGoal) {
			firstPlayerScore++;
		}
		if (secondUserGoal) {
			secondPlayerScore++;
		}
		updateScore();
		ball = { ...ballInitial };
		setBallDirection();
		drawBall();
		ballSpeed = initialBallSpeed;
	}

	function movePaddles(ev: KeyboardEvent) {

		const firstPaddleGoingUp = ev.key === moveFirstPaddleKey.up;
		const firstPaddleGoingDown = ev.key === moveFirstPaddleKey.down;
		const secondPaddleGoingUp = ev.key === moveSecondPaddleKey.up;
		const secondPaddleGoingDown = ev.key === moveSecondPaddleKey.down;

		const canFirstPaddleMoveUp = firstPaddle.y > 0;
		const canFirstPaddleMoveDown = firstPaddle.y < gameBoard.height - paddleSize.height;
		const canSecondPaddleMoveUp = secondPaddle.y > 0;
		const canSecondPaddleMoveDown = secondPaddle.y < gameBoard.height - paddleSize.height;

		if (firstPaddleGoingUp && canFirstPaddleMoveUp) {
			firstPaddle.y -= paddleSpeed;
		} else if (firstPaddleGoingDown && canFirstPaddleMoveDown) {
			firstPaddle.y += paddleSpeed;
		} else if (secondPaddleGoingUp && canSecondPaddleMoveUp) {
			secondPaddle.y -= paddleSpeed;
		} else if (secondPaddleGoingDown && canSecondPaddleMoveDown) {
			secondPaddle.y += paddleSpeed;
		}
	}

	function updateGame() {
		drawBoard();
		drawPaddles();
		moveBall();
		drawBall();
	}

	function restartGame() {
		clearInterval(intervalID);
		isGameRunning = false;
		isWaitingForStart = false;
		gameStartedOnce = false;
	
		ballSpeed = initialBallSpeed;
		ball = { ...ballInitial };
		firstPaddle = { ...firstPaddleInitial };
		secondPaddle = { ...secondPaddleInitial };
		firstPlayerScore = 0;
		secondPlayerScore = 0;
	
		window.removeEventListener("keydown", movePaddles);
		setupInitialState();
	}
	function setupInitialState() {
		isGameRunning = false;
		isWaitingForStart = true;
	
		drawBoard();
		drawPaddles();
		updateScore();
		setBallDirection();
		drawBall();
	
		if (!gameStartedOnce) {
			window.removeEventListener("keyup", startGame);
			console.log(">>>remove event listener");
			window.addEventListener("keyup", startGame, { once: true });
			console.log(">>>add event listener");
		}
	}
	
	  function initGame() {
		window.removeEventListener("keydown", movePaddles);
		clearInterval(intervalID);
		isGameRunning = false;
		setupInitialState();
	
		// ✅ Повторно назначаем обработчик рестарта
		restartBtn?.removeEventListener("click", restartGame); // чтобы не дублировался
		restartBtn?.addEventListener("click", restartGame);
	}

	function startGame(ev: KeyboardEvent) {
		if (ev.code === 'Space' && !isGameRunning && isWaitingForStart) {
			console.log('>>> GAME STARTED');
			isGameRunning = true;
			isWaitingForStart = false;
			gameStartedOnce = true;
			console.log("Start game fired"); 
	
			window.removeEventListener("keyup", startGame);
			window.addEventListener("keydown", movePaddles);
	
			intervalID = setInterval(updateGame, 20);
		}
	}

	initGame(); // if the game breaks use the line below
	// window.addEventListener("load", initGame);
}





