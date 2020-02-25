declare var Java: any;
import Egg from '../../../../org/bukkit/entity/Egg.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'
import PlayerEvent from '../../../../org/bukkit/event/player/PlayerEvent.js'

export default interface PlayerEggThrowEvent extends PlayerEvent {
	getEgg(): Egg;
	getEventName(): string;
	getHandlers(): HandlerList;
	getHatchingType(): EntityType;
	getNumHatches(): number;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	isHatching(): boolean;
	setHatching(hatching: boolean): void;
	setHatchingType(hatchType: EntityType): void;
	setNumHatches(numHatches: number): void;
}

export default class PlayerEggThrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEggThrowEvent');
	}

	constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
	constructor(...args: any[]) {
		return new PlayerEggThrowEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerEggThrowEvent.$javaClass.getHandlerList(...args);
	}

}

