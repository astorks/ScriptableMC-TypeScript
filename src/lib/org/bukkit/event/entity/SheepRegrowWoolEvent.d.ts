import { Sheep } from '../../../../org/bukkit/entity/Sheep.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
    getEntity(): Sheep;
    getEntity(): Entity;
    getHandlers(): HandlerList;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class SheepRegrowWoolEvent {
    static get $javaClass(): any;
    constructor(sheep: Sheep);
    static getHandlerList(): HandlerList;
}
