import { Player } from '../../../../org/bukkit/entity/Player.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityUnleashEvent$UnleashReason } from '../../../../org/bukkit/event/entity/EntityUnleashEvent$UnleashReason.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityUnleashEvent } from '../../../../org/bukkit/event/entity/EntityUnleashEvent.js';
export interface PlayerUnleashEntityEvent extends EntityUnleashEvent, Cancellable {
    getPlayer(): Player;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHandlers(): HandlerList;
    getReason(): EntityUnleashEvent$UnleashReason;
    getEntity(): Entity;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class PlayerUnleashEntityEvent {
    static get $javaClass(): any;
    constructor(entity: Entity, player: Player);
    static getHandlerList(): HandlerList;
}
