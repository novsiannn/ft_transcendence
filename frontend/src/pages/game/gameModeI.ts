export interface GameHandlerI{
    initGame(gameData?: any): void;
    startGame(): void;
    movePaddle(direction: 'up' | 'down',playerId?: number): void;
    onGameUpdate(callback: (gameState: any)=> void): void;
    onGameEnd(callback: (result: any) => void): void;
    cleanup(): void;
}

export interface GameStateI{
    ball: { x: number; y: number};
    paddles: {[key: string]:{ x:number; y: number; score: number}};
    isRunning: boolean;
    winner?:string;
}