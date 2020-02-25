declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Leaves extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getDistance(): number;
	getMaterial(): Material;
	isPersistent(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setDistance(arg0: number): void;
	setPersistent(arg0: boolean): void;
}

export default class Leaves {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Leaves');
	}

}

