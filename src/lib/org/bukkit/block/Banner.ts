declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import DyeColor from '../../../org/bukkit/DyeColor.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Pattern from '../../../org/bukkit/block/banner/Pattern.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface Banner extends TileState {
	addPattern(arg0: Pattern): void;
	getBaseColor(): DyeColor;
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getData(): MaterialData;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPattern(arg0: number): Pattern;
	getPatterns(): Array<Pattern>;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isPlaced(): boolean;
	numberOfPatterns(): number;
	removeMetadata(arg0: string, arg1: Plugin): void;
	removePattern(arg0: number): Pattern;
	setBaseColor(arg0: DyeColor): void;
	setBlockData(arg0: BlockData): void;
	setData(arg0: MaterialData): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setPattern(arg0: number, arg1: Pattern): void;
	setPatterns(arg0: Array<any>): void;
	setRawData(arg0: number): void;
	setType(arg0: Material): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class Banner {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Banner');
	}

}

