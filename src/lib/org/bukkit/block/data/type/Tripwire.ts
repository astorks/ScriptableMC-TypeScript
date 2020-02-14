declare var Java: any;
import Attachable from '../../../../../org/bukkit/block/data/Attachable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Tripwire extends Attachable, MultipleFacing, Powerable {
	clone(): any;
	clone(): BlockData;
	getAllowedFaces(): any;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getMaterial(): Material;
	hasFace(arg0: BlockFace): boolean;
	isAttached(): boolean;
	isDisarmed(): boolean;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAttached(arg0: boolean): void;
	setDisarmed(arg0: boolean): void;
	setFace(arg0: BlockFace, arg1: boolean): void;
	setPowered(arg0: boolean): void;
}

export default class Tripwire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Tripwire');
	}

}

