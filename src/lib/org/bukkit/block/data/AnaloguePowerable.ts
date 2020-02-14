declare var Java: any;
import BlockData from '../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../org/bukkit/Material.js'

export default interface AnaloguePowerable extends BlockData {
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

export default class AnaloguePowerable {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.AnaloguePowerable');
	}
}

