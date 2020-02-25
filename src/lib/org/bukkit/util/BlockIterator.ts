declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js'
import Location from '../../../org/bukkit/Location.js'
import Vector from '../../../org/bukkit/util/Vector.js'
import World from '../../../org/bukkit/World.js'

export default interface BlockIterator {
	forEachRemaining(action: any): void;
	hasNext(): boolean;
	next(): any;
	next(): Block;
	remove(): void;
}

export default class BlockIterator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.util.BlockIterator');
	}

	constructor(loc: Location);
	constructor(entity: LivingEntity);
	constructor(entity: LivingEntity, maxDistance: number);
	constructor(loc: Location, yOffset: number);
	constructor(loc: Location, yOffset: number, maxDistance: number);
	constructor(world: World, start: Vector, direction: Vector, yOffset: number, maxDistance: number);
	constructor(...args: any[]) {
		return new BlockIterator.$javaClass(...args);
	}

}

