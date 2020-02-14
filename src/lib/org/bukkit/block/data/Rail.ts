declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Rail$Shape from '../../../../org/bukkit/block/data/Rail$Shape.js'

export default interface Rail extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getShape(): Rail$Shape;
	getShapes(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setShape(arg0: Rail$Shape): void;
}

export default class Rail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rail');
	}

}

