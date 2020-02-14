declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Leaves extends BlockData {
	isPersistent(): boolean;
	setPersistent(arg0: boolean): void;
	setDistance(arg0: number): void;
	getDistance(): number;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Leaves');
	}
}

