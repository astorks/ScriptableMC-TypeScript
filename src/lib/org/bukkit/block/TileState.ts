declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockState from '../../../org/bukkit/block/BlockState.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import PersistentDataHolder from '../../../org/bukkit/persistence/PersistentDataHolder.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import World from '../../../org/bukkit/World.js'

export default interface TileState extends BlockState, PersistentDataHolder {
	getPersistentDataContainer(): PersistentDataContainer;
	getData(): MaterialData;
	getBlock(): Block;
	getWorld(): World;
	setType(arg0: Material): void;
	setData(arg0: MaterialData): void;
	getChunk(): Chunk;
	getX(): number;
	getY(): number;
	getZ(): number;
	getBlockData(): BlockData;
	setRawData(arg0: number): void;
	getRawData(): number;
	isPlaced(): boolean;
	setBlockData(arg0: BlockData): void;
	getLightLevel(): number;
	update(arg0: boolean, arg1: boolean): boolean;
	update(arg0: boolean): boolean;
	update(): boolean;
	getLocation(arg0: Location): Location;
	getLocation(): Location;
	getType(): Material;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	getMetadata(arg0: string): Array<MetadataValue>;
	hasMetadata(arg0: string): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
}

export default class TileState {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.TileState');
	}
}

