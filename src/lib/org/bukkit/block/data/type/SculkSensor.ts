declare var Java: any;
import AnaloguePowerable from '../../../../../org/bukkit/block/data/AnaloguePowerable.js'
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Material from '../../../../../org/bukkit/Material.js'
import SculkSensor$Phase from './SculkSensor$Phase.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface SculkSensor extends AnaloguePowerable, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getMaximumPower(): number;
	getPhase(): SculkSensor$Phase;
	getPower(): number;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setPhase(arg0: SculkSensor$Phase): void;
	setPower(arg0: number): void;
	setWaterlogged(arg0: boolean): void;
}

export default class SculkSensor {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.SculkSensor');
	}

}

