declare var Java: any;
import Block from './Block.js'
import BlockData from './data/BlockData.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import TileState from './TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface Jukebox extends TileState {
	eject(): boolean;
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getData(): MaterialData;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPersistentDataContainer(): PersistentDataContainer;
	getPlaying(): Material;
	getRawData(): number;
	getRecord(): ItemStack;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isPlaced(): boolean;
	isPlaying(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBlockData(arg0: BlockData): void;
	setData(arg0: MaterialData): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setPlaying(arg0: Material): void;
	setRawData(arg0: number): void;
	setRecord(arg0: ItemStack): void;
	setType(arg0: Material): void;
	stopPlaying(): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class Jukebox {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Jukebox');
	}

}

