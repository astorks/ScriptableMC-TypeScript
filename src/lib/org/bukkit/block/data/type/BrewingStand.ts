declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface BrewingStand extends BlockData {
	getMaximumBottles(): number;
	setBottle(arg0: number, arg1: boolean): void;
	getBottles(): any;
	hasBottle(arg0: number): boolean;
	getMaterial(): Material;
	getAsString(arg0: boolean): string;
	getAsString(): string;
	clone(): BlockData;
	clone(): any;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
}

export default class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.BrewingStand');
	}
}

