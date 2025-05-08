import { navigationHandle } from "../../elements/navigation";


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

	const gameBoardWidth = gameBoard.width;
	const gameBoardHeight = gameBoard.height;
	
	const moveFirstPaddleKey = {
		up: "w",
		down: "s"
	}
	
	const moveSecondPaddleKey = {
		up: "arrowup",
		down: "arrowdown"
	}

	// const keys = {
	// 	[moveFirstPaddleKey.up]: false,
	// 	[moveFirstPaddleKey.down]: false,
	// 	[moveSecondPaddleKey.up]: false,
	// 	[moveSecondPaddleKey.down]: false
	// };

	const keys = new Set<string>();

	const paddleSize = {
		width: 15,
		height: 150
	}

	const ballRadius = 8;
	const initialBallSpeed = 7;
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

	let firstPaddleTargetY = firstPaddle.y;
	let secondPaddleTargetY = secondPaddle.y;

	const paddleEffects = {
		glowSize: 15,      
		glowIntensity: 3,    
		glowColor: 'white',  
		baseColor: 'white'   
	}



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

	function drawPaddle(paddleX: number, paddleY: number, paddleColor: string) {
		const { glowSize, glowIntensity } = paddleEffects;
		const radius = paddleSize.width / 2;
	
		for(let i = 0; i < glowIntensity; i++) {
			context!.beginPath();
			context!.shadowColor = paddleColor;
			context!.shadowBlur = glowSize + (i * 5);
			context!.shadowOffsetX = 0;
			context!.shadowOffsetY = 0;
			context!.fillStyle = 'rgba(255, 255, 255, 0.2)';
			
			roundRect(
				context!,
				paddleX - i,
				paddleY - i,
				paddleSize.width + (i * 2),
				paddleSize.height + (i * 2),
				radius
			);
			context!.fill();
		}
	
		context!.beginPath();
		context!.shadowColor = 'transparent';
		context!.fillStyle = paddleColor;
		
		roundRect(
			context!,
			paddleX,
			paddleY,
			paddleSize.width,
			paddleSize.height,
			radius
		);
		context!.fill();
	
		// Сброс теней
		context!.shadowColor = 'transparent';
		context!.shadowBlur = 0;
	}
	
	function roundRect(
		ctx: CanvasRenderingContext2D,
		x: number,
		y: number,
		width: number,
		height: number,
		radius: number
	) {
		ctx.beginPath();
		ctx.moveTo(x + radius, y);
		ctx.arcTo(x + width, y, x + width, y + height, radius);
		ctx.arcTo(x + width, y + height, x, y + height, radius);
		ctx.arcTo(x, y + height, x, y, radius);
		ctx.arcTo(x, y, x + width, y, radius);
		ctx.closePath();
	}
	function drawPaddles() {
		drawPaddle(firstPaddle.x, firstPaddle.y, firstPaddleColor);
		drawPaddle(secondPaddle.x, secondPaddle.y, secondPaddleColor);
	}

	function drawBall() {
		for(let i = 0; i < 3; i++) {
			context!.beginPath();
			context!.shadowColor = 'white';  // цвет свечения
			context!.shadowBlur = 20 + (i * 5); // увеличиваем размер свечения с каждым слоем
			context!.shadowOffsetX = 0;
			context!.shadowOffsetY = 0;
			context!.fillStyle = 'rgba(255, 255, 255, 1)'; // красный
			context!.arc(ball.x, ball.y, ballRadius + i, 0, Math.PI * 2);
			context!.fill();
		}
	
		
		// Основной шарик
		context!.beginPath();
		context!.shadowColor = 'transparent';
		context!.arc(ball.x, ball.y, ballRadius, 0, Math.PI * 2);
		context!.fill();
		

		// Сброс теней
		context!.shadowColor = 'transparent';
		context!.shadowBlur = 0;
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

	function handleKeyDown(ev: KeyboardEvent) {
		const key = ev.key.toLowerCase();
		keys.add(key);
	}
	
	function handleKeyUp(ev: KeyboardEvent) {
		const key = ev.key.toLowerCase();
		keys.delete(key);
	}

	function updatePaddlePositions() {
		const step = paddleSize.height / 4; // Уменьшим шаг для более плавного движения
	
		// Первая платформа (w/s)
		if (keys.has("w") && firstPaddle.y > 0) {
			firstPaddleTargetY = Math.max(0, firstPaddle.y - step);
		}
		if (keys.has("s")) {
			firstPaddleTargetY = Math.min(gameBoardHeight - paddleSize.height, firstPaddle.y + step);
		}
	
		// Вторая платформа (стрелки)
		if (keys.has("arrowup") && secondPaddle.y > 0) {
			secondPaddleTargetY = Math.max(0, secondPaddle.y - step);
		}
		if (keys.has("arrowdown")) {
			secondPaddleTargetY = Math.min(gameBoardHeight - paddleSize.height, secondPaddle.y + step);
		}
	}

	function lerp(start: number, end: number, t: number) {
		return start * (1 - t) + end * t;
	}

	function updateGame() {
		updatePaddlePositions();
	
		const lerpFactor = 0.2; // Увеличим скорость реакции
		firstPaddle.y = lerp(firstPaddle.y, firstPaddleTargetY, lerpFactor);
		secondPaddle.y = lerp(secondPaddle.y, secondPaddleTargetY, lerpFactor);
	
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
	
		window.removeEventListener("keydown", handleKeyDown);
		window.removeEventListener("keyup", handleKeyUp);
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
		window.removeEventListener("keydown", handleKeyDown);
		window.removeEventListener("keyup", handleKeyUp);
		clearInterval(intervalID);
		isGameRunning = false;
		setupInitialState();
	
		// ✅ Повторно назначаем обработчик рестарта
		restartBtn?.removeEventListener("click", restartGame);
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
			window.addEventListener("keydown", handleKeyDown);
			window.addEventListener("keyup", handleKeyUp);
	
			intervalID = setInterval(updateGame, 16);
		}
	}

	initGame(); // if the game breaks use the line below
	// window.addEventListener("load", initGame);
}





