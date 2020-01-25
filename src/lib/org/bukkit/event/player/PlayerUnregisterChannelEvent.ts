declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerChannelEvent} from '../../../../org/bukkit/event/player/PlayerChannelEvent.js'

export interface PlayerUnregisterChannelEvent extends PlayerChannelEvent {
	getHandlers(): HandlerList;
	getChannel(): string;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerUnregisterChannelEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnregisterChannelEvent');
	}
	constructor(player: Player, channel: string);
	constructor(...args: any[]) {
		return new PlayerUnregisterChannelEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerUnregisterChannelEvent.$javaClass.getHandlerList(...args);
	}
}

