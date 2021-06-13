declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import Lightable from '../../../../../org/bukkit/block/data/Lightable.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Candle extends Lightable, Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getCandles(): number;
	getMaterial(): Material;
	getMaximumCandles(): number;
	getSoundGroup(): SoundGroup;
	isLit(): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setCandles(arg0: number): void;
	setLit(arg0: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Candle {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Candle');
	}

}

