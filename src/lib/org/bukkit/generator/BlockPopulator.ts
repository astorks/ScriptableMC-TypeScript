declare var Java: any;
import Chunk from '../../../org/bukkit/Chunk.js'
import World from '../../../org/bukkit/World.js'

export default interface BlockPopulator {
	populate(arg0: World, arg1: any, arg2: Chunk): void;
}

export default class BlockPopulator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.generator.BlockPopulator');
	}

	constructor();
	constructor(...args: any[]) {
		return new BlockPopulator.$javaClass(...args);
	}

}

