declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Comparator$Mode from '../../../../../org/bukkit/block/data/type/Comparator$Mode.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Comparator extends Directional, Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getMode(): Comparator$Mode;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setFacing(arg0: BlockFace): void;
	setMode(arg0: Comparator$Mode): void;
	setPowered(arg0: boolean): void;
}

export default class Comparator {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Comparator');
	}

}

