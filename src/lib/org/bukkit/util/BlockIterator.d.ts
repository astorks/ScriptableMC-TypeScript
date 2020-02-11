import Block from '../../../org/bukkit/block/Block.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import Vector from '../../../org/bukkit/util/Vector.js';
import World from '../../../org/bukkit/World.js';
export default interface BlockIterator {
    remove(): void;
    next(): Block;
    next(): any;
    hasNext(): boolean;
    forEachRemaining(action: any): void;
}
export default class BlockIterator {
    static get $javaClass(): any;
    constructor(entity: LivingEntity, maxDistance: number);
    constructor(loc: Location);
    constructor(loc: Location, yOffset: number);
    constructor(loc: Location, yOffset: number, maxDistance: number);
    constructor(entity: LivingEntity);
    constructor(world: World, start: Vector, direction: Vector, yOffset: number, maxDistance: number);
}
