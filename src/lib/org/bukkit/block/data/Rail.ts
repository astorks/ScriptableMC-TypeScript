declare var Java: any;
import BlockData from './BlockData.js'
import Material from '../../../../org/bukkit/Material.js'
import Rail$Shape from './Rail$Shape.js'
import SoundGroup from '../../../../org/bukkit/SoundGroup.js'
import Waterlogged from './Waterlogged.js'

export default interface Rail extends Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getShape(): Rail$Shape;
	getShapes(): any;
	getSoundGroup(): SoundGroup;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setShape(arg0: Rail$Shape): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Rail {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.Rail');
	}

}

