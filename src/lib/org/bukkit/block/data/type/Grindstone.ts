declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import FaceAttachable from '../../../../../org/bukkit/block/data/FaceAttachable.js'
import FaceAttachable$AttachedFace from '../../../../../org/bukkit/block/data/FaceAttachable$AttachedFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface Grindstone extends Directional, FaceAttachable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAttachedFace(): FaceAttachable$AttachedFace;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttachedFace(arg0: FaceAttachable$AttachedFace): void;
	setFacing(arg0: BlockFace): void;
}

export default class Grindstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Grindstone');
	}

}

