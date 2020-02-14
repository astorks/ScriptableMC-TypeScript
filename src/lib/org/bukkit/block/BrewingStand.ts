declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import BrewerInventory from '../../../org/bukkit/inventory/BrewerInventory.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Container from '../../../org/bukkit/block/Container.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import World from '../../../org/bukkit/World.js'

export default interface BrewingStand extends Container {
	getInventory(): BrewerInventory;
	getInventory(): Inventory;
	getSnapshotInventory(): Inventory;
	getSnapshotInventory(): BrewerInventory;
	getFuelLevel(): number;
	getBrewingTime(): number;
	setBrewingTime(arg0: number): void;
	setFuelLevel(arg0: number): void;
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
	getBlock(): Block;
	isLocked(): boolean;
	getLock(): string;
	setLock(arg0: string): void;
	getCustomName(): string;
	setCustomName(arg0: string): void;
}

export default class BrewingStand {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BrewingStand');
	}
}

