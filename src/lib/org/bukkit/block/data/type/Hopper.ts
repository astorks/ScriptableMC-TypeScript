declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Hopper extends Directional {
	isEnabled(): boolean;
	setEnabled(arg0: boolean): void;
	getFacing(): BlockFace;
	setFacing(arg0: BlockFace): void;
	getFaces(): any;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class Hopper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Hopper');
	}
}

