declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Openable extends BlockData {
	setOpen(arg0: boolean): void;
	isOpen(): boolean;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class Openable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Openable');
	}
}

