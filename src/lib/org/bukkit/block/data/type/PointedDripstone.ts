declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import PointedDripstone$Thickness from './PointedDripstone$Thickness.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface PointedDripstone extends Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	getThickness(): PointedDripstone$Thickness;
	getVerticalDirection(): BlockFace;
	getVerticalDirections(): any;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setThickness(arg0: PointedDripstone$Thickness): void;
	setVerticalDirection(arg0: BlockFace): void;
	setWaterlogged(arg0: boolean): void;
}

export default class PointedDripstone {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.PointedDripstone');
	}

}

