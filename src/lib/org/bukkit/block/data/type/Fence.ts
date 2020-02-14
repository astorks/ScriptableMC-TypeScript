declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Fence extends MultipleFacing, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAllowedFaces(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getMaterial(): Material;
	hasFace(arg0: BlockFace): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFace(arg0: BlockFace, arg1: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Fence {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Fence');
	}

}

