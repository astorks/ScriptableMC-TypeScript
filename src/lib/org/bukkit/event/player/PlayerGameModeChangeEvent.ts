declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import GameMode from '../../../../org/bukkit/GameMode.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerGameModeChangeEvent extends PlayerEvent, Cancellable {
	getEventName(): string;
	getHandlers(): HandlerList;
	getNewGameMode(): GameMode;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerGameModeChangeEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerGameModeChangeEvent');
	}

	constructor(player: Player, newGameMode: GameMode);
	constructor(...args: any[]) {
		return new PlayerGameModeChangeEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerGameModeChangeEvent.$javaClass.getHandlerList(...args);
	}

}

