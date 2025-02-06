import Page from '../../core/templates/page'

class Game extends Page{
	private borders: string[] = [
		"top-0 left-0 w-full h-4",
    	"bottom-0 left-0 w-full h-4",
   		"top-0 right-0 w-4 h-full",
	];

	constructor(id: string)
	{
		super(id);
	}

	removeAllClassesFromElement(elem: HTMLElement): void {
		while (elem.classList.length > 0) {
  			elem.classList.remove(elem.classList[0]);
		}
	}

	makeElementsForGame(){
		this.borders.forEach((cls) => { // Borders Creation
    		const border: HTMLDivElement = document.createElement("div");
    		border.className = `absolute bg-blue-500 ${cls}`;
			this.container.append(border);
 		}); 

		const paddle: HTMLDivElement = document.createElement("div"); // Paddle creation
  		paddle.id = "paddle";
  		paddle.className = "absolute left-4 top-1/2 w-4 h-24 bg-white";
  		this.container.appendChild(paddle);

		const ball: HTMLDivElement = document.createElement("div"); // Ball creation
  		ball.id = "ball";
  		ball.className = "absolute w-6 h-6 bg-white rounded-full";
  		this.container.appendChild(ball);

		// Start postions of elements
		let paddleY: number = window.innerHeight / 2 - 50;
		let ballX: number = window.innerWidth / 2;
		let ballY: number = window.innerHeight / 2;
		let ballSpeedX: number = 5;
		let ballSpeedY: number = 4;

		function movePaddle(e: KeyboardEvent): void {
    		if (e.key === "ArrowUp" && paddleY > 10) 
				paddleY -= 10;
    		if (e.key === "ArrowDown" && paddleY < window.innerHeight - 100) 
				paddleY += 10;
   			paddle.style.top = `${paddleY}px`;
  		}

		function updateBall(): void {
    		ballX += ballSpeedX;
    		ballY += ballSpeedY;

    		// Отскоки от верхнего и нижнего борта
    		if (ballY <= 0 || ballY >= window.innerHeight - 10) 
				ballSpeedY *= -1;
    		// Отскок от платформы
    		if ( ballX <= 20 && ballY > paddleY && ballY < paddleY + 100)
      			ballSpeedX *= -1;
			// Отскок от правого борта
    		if (ballX >= window.innerWidth - 10) {
      			ballSpeedX *= -1;
    		}
    		// Проверка на проигрыш (мяч улетел)
    		if (ballX < 0) {
      			alert("Вы проиграли!");
      		ballX = window.innerWidth / 2;
     		ballY = window.innerHeight / 2;
    		}

    		ball.style.left = `${ballX}px`;
   			ball.style.top = `${ballY}px`;
    		requestAnimationFrame(updateBall);
  		}
			window.addEventListener("keydown", movePaddle);
			updateBall();
	}

	render(){
		// PING-PONG CREATION !!!
		document.body.classList.add("overflow-x-hidden", "overflow-y-auto");
		this.removeAllClassesFromElement(this.container);
		this.container.className =  "relative w-screen h-screen bg-black overflow-hidden box-border ";
		this.makeElementsForGame();
		document.body.appendChild(this.container);
		return this.container;
	}
}

export default Game;