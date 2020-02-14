declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface Cake extends BlockData {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getBites(): number;
	getMaterial(): Material;
	getMaximumBites(): number;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setBites(arg0: number): void;
}

export default class Cake {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Cake');
	}

}

