declare var Java: any;
import Block from '../../../org/bukkit/block/Block.js'
import BlockData from '../../../org/bukkit/block/data/BlockData.js'
import Chunk from '../../../org/bukkit/Chunk.js'
import Furnace from '../../../org/bukkit/block/Furnace.js'
import FurnaceInventory from '../../../org/bukkit/inventory/FurnaceInventory.js'
import Inventory from '../../../org/bukkit/inventory/Inventory.js'
import Location from '../../../org/bukkit/Location.js'
import Material from '../../../org/bukkit/Material.js'
import MaterialData from '../../../org/bukkit/material/MaterialData.js'
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js'
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js'
import Plugin from '../../../org/bukkit/plugin/Plugin.js'
import World from '../../../org/bukkit/World.js'

export default interface BlastFurnace extends Furnace {
	getBlock(): Block;
	getBlock(): Block;
	getBlockData(): BlockData;
	getBurnTime(): number;
	getChunk(): Chunk;
	getCookTime(): number;
	getCookTimeTotal(): number;
	getCustomName(): string;
	getData(): MaterialData;
	getInventory(): Inventory;
	getInventory(): FurnaceInventory;
	getLightLevel(): number;
	getLocation(): Location;
	getLocation(arg0: Location): Location;
	getLock(): string;
	getMetadata(arg0: string): Array<MetadataValue>;
	getPersistentDataContainer(): PersistentDataContainer;
	getRawData(): number;
	getSnapshotInventory(): FurnaceInventory;
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
	setBurnTime(arg0: number): void;
	setCookTime(arg0: number): void;
	setCookTimeTotal(arg0: number): void;
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

export default class BlastFurnace {
	public static get $javaClass(): any {
		return Java.type('org.bukkit.block.BlastFurnace');
	}

}

