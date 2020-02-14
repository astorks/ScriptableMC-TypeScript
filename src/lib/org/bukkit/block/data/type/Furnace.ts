declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Lightable from '../../../../../org/bukkit/block/data/Lightable.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Furnace extends Directional, Lightable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	isLit(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setLit(arg0: boolean): void;
}

export default class Furnace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Furnace');
	}

}

