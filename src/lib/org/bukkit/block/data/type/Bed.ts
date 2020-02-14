declare var Java: any;
import Bed$Part from '../../../../../org/bukkit/block/data/type/Bed$Part.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Bed extends Directional {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getPart(): Bed$Part;
	isOccupied(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setPart(arg0: Bed$Part): void;
}

export default class Bed {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bed');
	}

}

