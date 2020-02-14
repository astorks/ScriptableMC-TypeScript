declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Hopper extends Directional {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	isEnabled(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setEnabled(arg0: boolean): void;
	setFacing(arg0: BlockFace): void;
}

export default class Hopper {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Hopper');
	}

}

