declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {World} from '../../../../org/bukkit/World.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChangedWorldEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getFrom(): World;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerChangedWorldEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedWorldEvent');
	}
	constructor(player: Player, from: World);
	constructor(...args: any[]) {
		return new PlayerChangedWorldEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChangedWorldEvent.$javaClass.getHandlerList(...args);
	}
}

