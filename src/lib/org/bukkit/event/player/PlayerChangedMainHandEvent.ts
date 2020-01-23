declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {MainHand} from '../../../../org/bukkit/inventory/MainHand.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerChangedMainHandEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	getMainHand(): MainHand;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerChangedMainHandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
	}
	constructor(who: Player, mainHand: MainHand);
	constructor(...args: any[]) {
		return new PlayerChangedMainHandEvent.$javaClass(...args);
	}
}

