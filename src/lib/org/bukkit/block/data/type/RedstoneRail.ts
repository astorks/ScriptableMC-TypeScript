declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Rail from '../../../../../org/bukkit/block/data/Rail.js'
import Rail$Shape from '../../../../../org/bukkit/block/data/Rail$Shape.js'

export default interface RedstoneRail extends Powerable, Rail {
	isPowered(): boolean;
	setPowered(arg0: boolean): void;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setShape(arg0: Rail$Shape): void;
	getShapes(): any;
	getShape(): Rail$Shape;
}

export default class RedstoneRail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneRail');
	}
}

