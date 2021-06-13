declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import TechnicalPiston from './TechnicalPiston.js'
import TechnicalPiston$Type from './TechnicalPiston$Type.js'

export default interface PistonHead extends TechnicalPiston {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	getType(): TechnicalPiston$Type;
	isShort(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setShort(arg0: boolean): void;
	setType(arg0: TechnicalPiston$Type): void;
}

export default class PistonHead {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.PistonHead');
	}

}

