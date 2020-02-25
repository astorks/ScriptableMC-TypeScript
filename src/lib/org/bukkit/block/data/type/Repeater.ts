declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js'

export default interface Repeater extends Directional, Powerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getDelay(): number;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getMaximumDelay(): number;
	getMinimumDelay(): number;
	isLocked(): boolean;
	isPowered(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setDelay(arg0: number): void;
	setFacing(arg0: BlockFace): void;
	setLocked(arg0: boolean): void;
	setPowered(arg0: boolean): void;
}

export default class Repeater {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Repeater');
	}

}

