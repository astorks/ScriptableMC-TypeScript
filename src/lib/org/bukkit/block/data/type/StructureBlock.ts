declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import StructureBlock$Mode from '../../../../../org/bukkit/block/data/type/StructureBlock$Mode.js'

export default interface StructureBlock extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMode(): StructureBlock$Mode;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setMode(arg0: StructureBlock$Mode): void;
}

export default class StructureBlock {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.StructureBlock');
	}

}

