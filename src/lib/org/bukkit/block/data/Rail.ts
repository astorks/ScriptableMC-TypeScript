declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Rail$Shape from '../../../../org/bukkit/block/data/Rail$Shape.js'

export default interface Rail extends BlockData {
	setShape(arg0: Rail$Shape): void;
	getShapes(): any;
	getShape(): Rail$Shape;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class Rail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rail');
	}
}

