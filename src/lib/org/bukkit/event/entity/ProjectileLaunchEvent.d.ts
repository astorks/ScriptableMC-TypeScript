import { Projectile } from '../../../../org/bukkit/entity/Projectile.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { Location } from '../../../../org/bukkit/Location.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntitySpawnEvent } from '../../../../org/bukkit/event/entity/EntitySpawnEvent.js';
export interface ProjectileLaunchEvent extends EntitySpawnEvent, Cancellable {
    getEntity(): Projectile;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getLocation(): Location;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class ProjectileLaunchEvent {
    static get $javaClass(): any;
    constructor(what: Entity);
    static getHandlerList(): HandlerList;
}
