declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import Slab$Type from '../../../../../org/bukkit/block/data/type/Slab$Type.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Slab extends Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getType(): Slab$Type;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setType(arg0: Slab$Type): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Slab {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Slab');
	}

}

