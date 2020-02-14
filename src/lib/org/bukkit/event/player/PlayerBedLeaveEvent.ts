declare var Java: any;
import Block from '../../../../org/bukkit/block/Block.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerBedLeaveEvent extends PlayerEvent {
	getBed(): Block;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	setSpawnLocation(setBedSpawn: boolean): void;
	shouldSetSpawnLocation(): boolean;
}

export default class PlayerBedLeaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedLeaveEvent');
	}

	constructor(who: Player, bed: Block, setBedSpawn: boolean);
	constructor(...args: any[]) {
		return new PlayerBedLeaveEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerBedLeaveEvent.$javaClass.getHandlerList(...args);
	}

}

