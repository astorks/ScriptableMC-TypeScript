declare var Java: any;
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import MainHand from '../../../../org/bukkit/inventory/MainHand.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerChangedMainHandEvent extends PlayerEvent {
	getEventName(): string;
	getHandlers(): HandlerList;
	getMainHand(): MainHand;
	getPlayer(): Player;
	isAsynchronous(): boolean;
}

export default class PlayerChangedMainHandEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerChangedMainHandEvent');
	}

	constructor(who: Player, mainHand: MainHand);
	constructor(...args: any[]) {
		return new PlayerChangedMainHandEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerChangedMainHandEvent.$javaClass.getHandlerList(...args);
	}

}

