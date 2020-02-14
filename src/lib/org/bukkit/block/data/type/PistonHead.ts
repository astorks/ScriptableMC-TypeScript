declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import TechnicalPiston from '../../../../../org/bukkit/block/data/type/TechnicalPiston.js'
import TechnicalPiston$Type from '../../../../../org/bukkit/block/data/type/TechnicalPiston$Type.js'

export default interface PistonHead extends TechnicalPiston {
	isShort(): boolean;
	setShort(arg0: boolean): void;
	setType(arg0: TechnicalPiston$Type): void;
	getType(): TechnicalPiston$Type;
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

export default class PistonHead {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.PistonHead');
	}
}

