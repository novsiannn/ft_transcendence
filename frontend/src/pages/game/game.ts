import Page from '../../core/templates/page';

class Game extends Page {
  private borders: string[] = [
    "top-0 left-0 w-full h-4",
    "bottom-0 left-0 w-full h-4",
    "top-0 right-0 w-4 h-full",
  ];

  private animationFrameId: number | null = null;
  private keydownHandler: (e: KeyboardEvent) => void;
  private paddleY: number;
  private ballX: number;
  private ballY: number;
  private ballSpeedX: number;
  private ballSpeedY: number;
  private paddle: HTMLDivElement | null = null;

  // Статический экземпляр игры
  private static currentInstance: Game | null = null;

  constructor(id: string) {
    super(id);
    this.paddleY = window.innerHeight / 2 - 50;
    this.ballX = window.innerWidth / 2;
    this.ballY = window.innerHeight / 2;
    this.ballSpeedX = 7;
    this.ballSpeedY = 6;

    // Привязываем обработчик события movePaddle
    this.keydownHandler = this.movePaddle.bind(this);

    // Сохраняем текущий экземпляр игры
    Game.currentInstance = this;
  }

  // Метод для движения ракетки
  movePaddle(e: KeyboardEvent): void {
    if (!this.paddle) return;
    if (e.key === "ArrowUp" && this.paddleY > 10) this.paddleY -= 15;
    if (e.key === "ArrowDown" && this.paddleY < window.innerHeight - 100) this.paddleY += 15;
    if (this.paddle) {
      this.paddle.style.top = `${this.paddleY}px`;
    }
  }

  executeMethod(callback: () => void) {
    callback();  // Вызов переданного метода
  }

  // Остановка игры
  stopGame() {
    // Если существует анимация, останавливаем её
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    // Удаляем обработчик события 'keydown'
    window.removeEventListener("keydown", this.keydownHandler);

    // Убираем все элементы игры
    if (this.paddle) {
      this.paddle.remove();
    }

    if(this.ballX)
        this.ballX = 0;
    if(this.ballY)
      this.ballY = 0;

    // Очистка всех других ресурсов, если они есть
    // Например, удаление других DOM элементов, если это необходимо
  }

  // Удаляем все классы у элемента
  removeAllClassesFromElement(elem: HTMLElement): void {
    while (elem.classList.length > 0) {
      elem.classList.remove(elem.classList[0]);
    }
  }

  // Метод для создания элементов игры
  makeElementsForGame() {
    this.borders.forEach((cls) => {
      const border: HTMLDivElement = document.createElement("div");
      border.className = `absolute bg-blue-500 ${cls}`;
      this.container.append(border);
    });

    this.paddle = document.createElement("div");
    this.paddle.id = "paddle";
    this.paddle.className = "absolute left-4 top-1/2 w-4 h-24 bg-white";
    this.container.appendChild(this.paddle);

    const ball: HTMLDivElement = document.createElement("div");
    ball.id = "ball";
    ball.className = "absolute w-6 h-6 bg-white rounded-full";
    this.container.appendChild(ball);

    const updateBall = (): void => {
      this.ballX += this.ballSpeedX;
      this.ballY += this.ballSpeedY;

      if (this.ballY <= 0 || this.ballY >= window.innerHeight - 10) this.ballSpeedY *= -1;
      if (this.ballX <= 20 && this.ballY > this.paddleY && this.ballY < this.paddleY + 100) this.ballSpeedX *= -1;
      if (this.ballX >= window.innerWidth - 10) this.ballSpeedX *= -1;
      if (this.ballX < 0) {
        alert("Lost!");
        this.ballX = window.innerWidth / 2;
        this.ballY = window.innerHeight / 2;
      }

      ball.style.left = `${this.ballX}px`;
      ball.style.top = `${this.ballY}px`;
      this.animationFrameId = requestAnimationFrame(updateBall);
    };

    window.addEventListener("keydown", this.keydownHandler);
    window.addEventListener("hashchange", () =>this.stopGame());
    this.animationFrameId = requestAnimationFrame(updateBall);
  }

  // Рендерим элементы на странице
  render() {
    document.body.classList.add("overflow-x-hidden", "overflow-y-auto");
    this.removeAllClassesFromElement(this.container);
    this.container.className = "relative w-screen h-screen bg-black overflow-hidden box-border";
    this.makeElementsForGame();
    document.body.appendChild(this.container);
    return this.container;
  }
}

export default Game;