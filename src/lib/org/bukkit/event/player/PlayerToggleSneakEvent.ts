declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerToggleSneakEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	isSneaking(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerToggleSneakEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerToggleSneakEvent');
	}
	constructor(player: Player, isSneaking: boolean);
	constructor(...args: any[]) {
		return new PlayerToggleSneakEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerToggleSneakEvent.$javaClass.getHandlerList(...args);
	}
}

