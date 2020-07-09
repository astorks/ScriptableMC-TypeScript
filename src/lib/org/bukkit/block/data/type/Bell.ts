declare var Java: any;
import Bell$Attachment from './Bell$Attachment.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Bell extends Directional, Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getAttachment(): Bell$Attachment;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttachment(arg0: Bell$Attachment): void;
	setFacing(arg0: BlockFace): void;
	setPowered(arg0: boolean): void;
}

export default class Bell {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Bell');
	}

}

