declare var Java: any;
import Bisected from '../../../../../org/bukkit/block/data/Bisected.js'
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Door$Hinge from '../../../../../org/bukkit/block/data/type/Door$Hinge.js'
import Material from '../../../../../org/bukkit/Material.js'
import Openable from '../../../../../org/bukkit/block/data/Openable.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Door extends Bisected, Directional, Openable, Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getHalf(): Bisected$Half;
	getHinge(): Door$Hinge;
	getMaterial(): Material;
	isOpen(): boolean;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setHalf(arg0: Bisected$Half): void;
	setHinge(arg0: Door$Hinge): void;
	setOpen(arg0: boolean): void;
	setPowered(arg0: boolean): void;
}

export default class Door {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Door');
	}

}

