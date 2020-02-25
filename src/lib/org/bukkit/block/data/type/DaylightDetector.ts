declare var Java: any;
import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'

export default interface DaylightDetector extends AnaloguePowerable {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumPower(): number;
	getPower(): number;
	isInverted(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setInverted(arg0: boolean): void;
	setPower(arg0: number): void;
}

export default class DaylightDetector {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.DaylightDetector');
	}

}

