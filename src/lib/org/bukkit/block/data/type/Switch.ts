declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import FaceAttachable from '../../../../../org/bukkit/block/data/FaceAttachable.js'
import FaceAttachable$AttachedFace from '../../../../../org/bukkit/block/data/FaceAttachable$AttachedFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'
import Switch$Face from './Switch$Face.js'

export default interface Switch extends Directional, FaceAttachable, Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAttachedFace(): FaceAttachable$AttachedFace;
	getFace(): Switch$Face;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttachedFace(arg0: FaceAttachable$AttachedFace): void;
	setFace(arg0: Switch$Face): void;
	setFacing(arg0: BlockFace): void;
	setPowered(arg0: boolean): void;
}

export default class Switch {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Switch');
	}

}

