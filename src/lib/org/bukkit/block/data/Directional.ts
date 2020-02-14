declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface Directional extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
}

export default class Directional {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Directional');
	}

}

