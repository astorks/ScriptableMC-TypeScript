import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Sheep from '../../../../org/bukkit/entity/Sheep.js';
export default interface SheepRegrowWoolEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Sheep;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SheepRegrowWoolEvent {
    static get $javaClass(): any;
    constructor(sheep: Sheep);
    static getHandlerList(): HandlerList;
}
