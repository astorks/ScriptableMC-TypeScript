import { Sheep } from '../../../../org/bukkit/entity/Sheep.js';
import { Entity } from '../../../../org/bukkit/entity/Entity.js';
import { DyeColor } from '../../../../org/bukkit/DyeColor.js';
import { HandlerList } from '../../../../org/bukkit/event/HandlerList.js';
import { EntityType } from '../../../../org/bukkit/entity/EntityType.js';
import { Cancellable } from '../../../../org/bukkit/event/Cancellable.js';
import { EntityEvent } from '../../../../org/bukkit/event/entity/EntityEvent.js';
export interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    getEntity(): Sheep;
    getEntity(): Entity;
    getColor(): DyeColor;
    getHandlers(): HandlerList;
    setColor(color: DyeColor): void;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export declare class SheepDyeWoolEvent {
    static get $javaClass(): any;
    constructor(sheep: Sheep, color: DyeColor);
    static getHandlerList(): HandlerList;
}
