import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntitySpawnEvent } from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
export interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Entity;
    getEntity(): Projectile;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getHandlers(): HandlerList;
    getLocation(): Location;
    getEntityType(): EntityType;
    isAsynchronous(): boolean;
    getEventName(): string;
}
export declare class ProjectileLaunchEvent {
    static get $javaClass(): any;
    constructor(what: Entity);
    static getHandlerList(): HandlerList;
}
