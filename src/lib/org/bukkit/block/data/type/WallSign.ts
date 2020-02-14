declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface WallSign extends Directional, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setWaterlogged(arg0: boolean): void;
}

export default class WallSign {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.WallSign');
	}

}

