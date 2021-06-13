declare var Java: any;
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js'
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js'
import Material from '../../../../../org/bukkit/Material.js'
import SoundGroup from '../../../../../org/bukkit/SoundGroup.js'
import Wall$Height from './Wall$Height.js'
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js'

export default interface Wall extends Waterlogged {
	clone(): any;
	clone(): BlockData;
	getAsString(): string;
	getAsString(arg0: boolean): string;
	getHeight(arg0: BlockFace): Wall$Height;
	getMaterial(): Material;
	getSoundGroup(): SoundGroup;
	isUp(): boolean;
	isWaterlogged(): boolean;
	matches(arg0: BlockData): boolean;
	merge(arg0: BlockData): BlockData;
	setHeight(arg0: BlockFace, arg1: Wall$Height): void;
	setUp(arg0: boolean): void;
	setWaterlogged(arg0: boolean): void;
}

export default class Wall {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.data.type.Wall');
	}

}

