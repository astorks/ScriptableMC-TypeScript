declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Observer extends Directional, Powerable {
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
	isPowered(): boolean;
	setPowered(arg0: boolean): void;
}

export default class Observer {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Observer');
	}
}
