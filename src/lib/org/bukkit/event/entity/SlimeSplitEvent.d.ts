import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityEvent from '../../../../org/bukkit/event/entity/EntityEvent.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import Slime from '../../../../org/bukkit/entity/Slime.js';
export default interface SlimeSplitEvent extends EntityEvent, Cancellable {
    getHandlers(): HandlerList;
    getEntity(): Slime;
    getEntity(): Entity;
    isCancelled(): boolean;
    setCancelled(cancel: boolean): void;
    getCount(): number;
    setCount(count: number): void;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class SlimeSplitEvent {
    static get $javaClass(): any;
    constructor(slime: Slime, count: number);
    static getHandlerList(): HandlerList;
}
