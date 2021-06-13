declare var Java: any;
import Bisected from '../../../../../org/bukkit/block/data/Bisected.js'
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Dripleaf from './Dripleaf.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface SmallDripleaf extends Dripleaf, Bisected {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getHalf(): Bisected$Half;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setHalf(arg0: Bisected$Half): void;
	setWaterlogged(arg0: boolean): void;
}

export default class SmallDripleaf {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.SmallDripleaf');
	}

}

