declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'

export default interface RespawnAnchor extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getCharges(): number;
	getMaterial(): Material;
	getMaximumCharges(): number;
	getSoundGroup(): SoundGroup;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setCharges(arg0: number): void;
}

export default class RespawnAnchor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.RespawnAnchor');
	}

}

