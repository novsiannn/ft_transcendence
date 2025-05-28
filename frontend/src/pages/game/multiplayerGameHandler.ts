import { GameHandlerI, GameStateI } from './gameModeI';
import { 
  joinGame, 
  movePaddle, 
  startGame, 
  leaveGame,
  onGameReady,
  onGameUpdate,
  onGameStart,
  onGameFinished,
  onGameError,
  clearGameCallbacks
} from '../../websockets/client';

export class MultiplayerGameHandler implements GameHandlerI {
  private gameUpdateCallback?: (gameState: GameStateI) => void;
  private gameEndCallback?: (result: any) => void;
  private currentGameId?: string;

  initGame(gameData: { gameId: string }): void {
    this.currentGameId = gameData.gameId;
    this.setupWebSocketListeners();
    joinGame(this.currentGameId);
    console.log('Multiplayer game initialized');
  }

  private setupWebSocketListeners(): void {
    onGameReady((gameState) => {
      console.log('Game ready', gameState);
      if (this.gameUpdateCallback) {
        this.gameUpdateCallback({
          ...gameState,
          winner: gameState.winner !== undefined ? gameState.winner.toString() : undefined
        });
      }
    });
    
    onGameUpdate((gameState) => {
      if (this.gameUpdateCallback) {
        this.gameUpdateCallback({
          ...gameState,
          winner: gameState.winner !== undefined ? gameState.winner.toString() : undefined
        });
      }
    });
    
    onGameStart((gameState) => {
      console.log('Game started', gameState);
      if (this.gameUpdateCallback) {
        this.gameUpdateCallback({
          ...gameState,
          winner: gameState.winner !== undefined ? gameState.winner.toString() : undefined
        });
      }
    });

    onGameFinished((result) => {
      console.log('Game finished', result);
      if (this.gameEndCallback) {
        this.gameEndCallback(result);
      }
    });

    onGameError((error) => {
      console.error('Game error', error);
    });
  }

  startGame(): void {
    if (this.currentGameId) {
      startGame(this.currentGameId);
    }
  }

  movePaddle(direction: 'up' | 'down'): void {
    if (this.currentGameId) {
      movePaddle(this.currentGameId, direction);
    }
  }

  onGameUpdate(callback: (gameState: GameStateI) => void): void {
    this.gameUpdateCallback = callback;
  }

  onGameEnd(callback: (result: any) => void): void {
    this.gameEndCallback = callback;
  }

  cleanup(): void {
    if (this.currentGameId) {
      leaveGame(this.currentGameId);
    }
    clearGameCallbacks();
    this.gameUpdateCallback = undefined;
    this.gameEndCallback = undefined;
    this.currentGameId = undefined;
  }
}