declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Rail from '../../../../../org/bukkit/block/data/Rail.js'
import Rail$Shape from '../../../../../org/bukkit/block/data/Rail$Shape.js'

export default interface RedstoneRail extends Powerable, Rail {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getShape(): Rail$Shape;
	getShapes(): any;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setPowered(arg0: boolean): void;
	setShape(arg0: Rail$Shape): void;
}

export default class RedstoneRail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneRail');
	}

}

