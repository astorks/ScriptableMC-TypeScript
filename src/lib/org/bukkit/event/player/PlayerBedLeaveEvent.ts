declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Block} from '../../../../org/bukkit/block/Block.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerBedLeaveEvent extends PlayerEvent {
	getHandlers(): HandlerList;
	setSpawnLocation(setBedSpawn: boolean): void;
	shouldSetSpawnLocation(): boolean;
	getBed(): Block;
	getPlayer(): Player;
	isAsynchronous(): boolean;
	getEventName(): string;
}

export class PlayerBedLeaveEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerBedLeaveEvent');
	}
	constructor(who: Player, bed: Block, setBedSpawn: boolean);
	constructor(...args: any[]) {
		return new PlayerBedLeaveEvent.$javaClass(...args);
	}
}

