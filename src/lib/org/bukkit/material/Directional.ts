declare var Java: any;
import BlockFace from '../../../org/bukkit/block/BlockFace.js'

export default interface Directional {
	getFacing(): BlockFace;
	setFacingDirection(arg0: BlockFace): void;
}

export default class Directional {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.material.Directional');
	}

}

