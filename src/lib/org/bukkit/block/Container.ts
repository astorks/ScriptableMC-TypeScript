declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BlockInventoryHolder from '../../../org/bukkit/inventory/BlockInventoryHolder.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import Location from '../../../org/bukkit/Location.js'
import Lockable from '../../../org/bukkit/block/Lockable.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import Nameable from '../../../org/bukkit/Nameable.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import TileState from '../../../org/bukkit/block/TileState.js'
import World from '../../../org/bukkit/World.js'

export default interface Container extends TileState, BlockInventoryHolder, Lockable, Nameable {
	getBlock(): Block;
	getBlock(): Block;
	getBlockData(): BlockData;
	getChunk(): Chunk;
	getCustomName(): string;
	getData(): MaterialData;
	getInventory(): Inventory;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getLock(): string;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getSnapshotInventory(): Inventory;
	getType(): Material;
	getWorld(): World;
	getX(): number;
	getY(): number;
	getZ(): number;
	hasMetadata(arg0: string): boolean;
	isLocked(): boolean;
	isPlaced(): boolean;
	removeMetadata(arg0: string, arg1: Plugin): void;
	setBlockData(arg0: BlockData): void;
	setCustomName(arg0: string): void;
	setData(arg0: MaterialData): void;
	setLock(arg0: string): void;
	setMetadata(arg0: string, arg1: MetadataValue): void;
	setRawData(arg0: number): void;
	setType(arg0: Material): void;
	update(): boolean;
	update(arg0: boolean): boolean;
	update(arg0: boolean, arg1: boolean): boolean;
}

export default class Container {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.Container');
	}

}

