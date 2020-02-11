import Cancellable from '../../../../org/bukkit/event/Cancellable.js';
import Entity from '../../../../org/bukkit/entity/Entity.js';
import EntityTransformEvent from '../../../../org/bukkit/event/entity/EntityTransformEvent.js';
import EntityTransformEvent$TransformReason from '../../../../org/bukkit/event/entity/EntityTransformEvent$TransformReason.js';
import EntityType from '../../../../org/bukkit/entity/EntityType.js';
import HandlerList from '../../../../org/bukkit/event/HandlerList.js';
import LightningStrike from '../../../../org/bukkit/entity/LightningStrike.js';
import Pig from '../../../../org/bukkit/entity/Pig.js';
import PigZombie from '../../../../org/bukkit/entity/PigZombie.js';
export default interface PigZapEvent extends EntityTransformEvent, Cancellable {
    getEntity(): Pig;
    getEntity(): Entity;
    setCancelled(cancel: boolean): void;
    isCancelled(): boolean;
    getHandlers(): HandlerList;
    getLightning(): LightningStrike;
    getPigZombie(): PigZombie;
    getTransformReason(): EntityTransformEvent$TransformReason;
    getTransformedEntity(): Entity;
    getTransformedEntities(): Array<Entity>;
    getEntityType(): EntityType;
    getEventName(): string;
    isAsynchronous(): boolean;
}
export default class PigZapEvent {
    static get $javaClass(): any;
    constructor(pig: Pig, bolt: LightningStrike, pigzombie: PigZombie);
    static getHandlerList(): HandlerList;
}