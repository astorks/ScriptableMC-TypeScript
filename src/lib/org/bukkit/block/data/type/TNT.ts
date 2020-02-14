declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface TNT extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	isUnstable(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setUnstable(arg0: boolean): void;
}

export default class TNT {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.TNT');
	}

}

