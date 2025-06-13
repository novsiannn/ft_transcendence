const gameService = require('../services/gameService');

class PreGameTimer {
    constructor(gameId, duration = 20) {
        this.gameId = gameId;
        this.seconds = duration;
        this.readyUsers = [];
    }

    handleTick() {
        if (this.seconds > 0) {
            this.seconds--;
        } else {
            gameService.updateDuelStatus(this.gameId, 'abandoned');
        }
    }
}