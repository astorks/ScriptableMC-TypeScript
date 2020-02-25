declare var Java: any;
import Cancellable from '../../../../org/bukkit/event/Cancellable.js'
import Entity from '../../../../org/bukkit/entity/Entity.js'
import EntityType from '../../../../org/bukkit/entity/EntityType.js'
import EntityUnleashEvent from '../../../../org/bukkit/event/entity/EntityUnleashEvent.js'
import EntityUnleashEvent$UnleashReason from '../../../../org/bukkit/event/entity/EntityUnleashEvent$UnleashReason.js'
import HandlerList from '../../../../org/bukkit/event/HandlerList.js'
import Player from '../../../../org/bukkit/entity/Player.js'

export default interface PlayerUnleashEntityEvent extends EntityUnleashEvent, Cancellable {
	getEntity(): Entity;
	getEntityType(): EntityType;
	getEventName(): string;
	getHandlers(): HandlerList;
	getPlayer(): Player;
	getReason(): EntityUnleashEvent$UnleashReason;
	isAsynchronous(): boolean;
	isCancelled(): boolean;
	setCancelled(cancel: boolean): void;
}

export default class PlayerUnleashEntityEvent {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.event.player.PlayerUnleashEntityEvent');
	}

	constructor(entity: Entity, player: Player);
	constructor(...args: any[]) {
		return new PlayerUnleashEntityEvent.$javaClass(...args);
	}

	public static getHandlerList(): HandlerList;
	public static getHandlerList(...args: any[]): any {
		return PlayerUnleashEntityEvent.$javaClass.getHandlerList(...args);
	}

}

