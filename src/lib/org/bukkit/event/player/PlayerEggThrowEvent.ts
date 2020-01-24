declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Egg} from '../../../../org/bukkit/entity/Egg.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerEggThrowEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setHatching(hatching: boolean): void;
	setNumHatches(numHatches: number): void;
	getNumHatches(): number;
	setHatchingType(hatchType: EntityType): void;
	isHatching(): boolean;
	getHatchingType(): EntityType;
	getEgg(): Egg;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerEggThrowEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerEggThrowEvent');
	}
	constructor(player: Player, egg: Egg, hatching: boolean, numHatches: number, hatchingType: EntityType);
	constructor(...args: any[]) {
		return new PlayerEggThrowEvent.$javaClass(...args);
	}
}

