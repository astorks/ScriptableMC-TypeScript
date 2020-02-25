declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface MultipleFacing extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAllowedFaces(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getMaterial(): Material;
	hasFace(arg0: BlockFace): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFace(arg0: BlockFace, arg1: boolean): void;
}

export default class MultipleFacing {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.MultipleFacing');
	}

}

