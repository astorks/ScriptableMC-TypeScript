import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import DyeColor from '../../../../org/bukkit/DyeColor.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Sheep from '../../../../org/bukkit/entity/Sheep.js';
export default interface SheepDyeWoolEvent extends EntityEvent, Cancellable {
    getEntity(): Sheep;
    getEntity(): Entity;
    getColor(): DyeColor;
    setColor(color: DyeColor): void;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SheepDyeWoolEvent {
    static get $javaClass(): any;
    constructor(sheep: Sheep, color: DyeColor);
    static getHandlerList(): HandlerList;
}
