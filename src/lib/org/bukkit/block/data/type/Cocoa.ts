declare var Java: any;
import Ageable from '../../../../../org/bukkit/block/data/Ageable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Directional from '../../../../../org/bukkit/block/data/Directional.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Cocoa extends Ageable, Directional {
	clone(): any;
	clone(): BlockData;
	getAge(): number;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getFaces(): any;
	getFacing(): BlockFace;
	getMaterial(): Material;
	getMaximumAge(): number;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setAge(arg0: number): void;
	setFacing(arg0: BlockFace): void;
}

export default class Cocoa {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Cocoa');
	}

}

