declare var Java: any;
import BigDripleaf$Tilt from './BigDripleaf$Tilt.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Dripleaf from './Dripleaf.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface BigDripleaf extends Dripleaf {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	getTilt(): BigDripleaf$Tilt;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setTilt(arg0: BigDripleaf$Tilt): void;
	setWaterlogged(arg0: boolean): void;
}

export default class BigDripleaf {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.BigDripleaf');
	}

}

