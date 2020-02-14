declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import StructureBlock$Mode from '../../../../../org/bukkit/block/data/type/StructureBlock$Mode.js'

export default interface StructureBlock extends BlockData {
	setMode(arg0: StructureBlock$Mode): void;
	getMode(): StructureBlock$Mode;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class StructureBlock {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.StructureBlock');
	}
}

