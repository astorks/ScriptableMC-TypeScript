declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Beehive extends Directional {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getHoneyLevel(): number;
	getMaterial(): Material;
	getMaximumHoneyLevel(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setHoneyLevel(arg0: number): void;
}

export default class Beehive {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Beehive');
	}

}

