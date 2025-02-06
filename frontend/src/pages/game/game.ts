import Page from '../../core/templates/page'

class Game extends Page{
	static textObject = {
		MainTitle: 'game-page'
	}

	constructor(id: string)
	{
		super(id);
	}

	render(){
		const title = this.createHeaderTitle(Game.textObject.MainTitle);
		this.container.append(title);
		return this.container;
	}
}

export default Game;