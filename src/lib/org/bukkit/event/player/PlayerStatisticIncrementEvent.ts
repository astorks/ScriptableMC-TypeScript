declare var Java: any;
import {HandlerList} from '../../../../org/bukkit/event/HandlerList.js'
import {Statistic} from '../../../../org/bukkit/Statistic.js'
import {Material} from '../../../../org/bukkit/Material.js'
import {EntityType} from '../../../../org/bukkit/entity/EntityType.js'
import {Player} from '../../../../org/bukkit/entity/Player.js'
import {Cancellable} from '../../../../org/bukkit/event/Cancellable.js'
import {PlayerEvent} from '../../../../org/bukkit/event/player/PlayerEvent.js'

export interface PlayerStatisticIncrementEvent extends PlayerEvent, Cancellable {
	getHandlers(): HandlerList;
	getStatistic(): Statistic;
	getMaterial(): Material;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
	getEntityType(): EntityType;
	getNewValue(): number;
	getPreviousValue(): number;
	getPlayer(): Player;
	getEventName(): string;
	isAsynchronous(): boolean;
}

export class PlayerStatisticIncrementEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerStatisticIncrementEvent');
	}
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, entityType: EntityType);
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number);
	constructor(player: Player, statistic: Statistic, initialValue: number, newValue: number, material: Material);
	constructor(...args: any[]) {
		return new PlayerStatisticIncrementEvent.$javaClass(...args);
	}
	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerStatisticIncrementEvent.$javaClass.getHandlerList(...args);
	}
}

