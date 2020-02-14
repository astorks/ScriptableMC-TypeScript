declare var Java: any;
import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import RedstoneWire$Connection from '../../../../../org/bukkit/block/data/type/RedstoneWire$Connection.js'

export default interface RedstoneWire extends AnaloguePowerable {
	getFace(arg0: BlockFace): RedstoneWire$Connection;
	setFace(arg0: BlockFace, arg1: RedstoneWire$Connection): void;
	getAllowedFaces(): any;
	getPower(): number;
	setPower(arg0: number): void;
	getMaximumPower(): number;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class RedstoneWire {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RedstoneWire');
	}
}

