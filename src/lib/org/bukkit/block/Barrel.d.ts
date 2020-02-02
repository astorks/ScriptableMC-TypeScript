import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Container from '../../../org/bukkit/block/Container.js';
import Inventory from '../../../org/bukkit/inventory/Inventory.js';
import Location from '../../../org/bukkit/Location.js';
import LootTable from '../../../org/bukkit/loot/LootTable.js';
import Lootable from '../../../org/bukkit/loot/Lootable.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import World from '../../../org/bukkit/World.js';
export default interface Barrel extends Container, Lootable {
    getInventory(): Inventory;
    getSnapshotInventory(): Inventory;
    getPersistentDataContainer(): PersistentDataContainer;
    update(arg0: boolean): boolean;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    getChunk(): Chunk;
    getZ(): number;
    getY(): number;
    getX(): number;
    getWorld(): World;
    getBlock(): Block;
    getBlock(): Block;
    getData(): MaterialData;
    setType(arg0: Material): void;
    setData(arg0: MaterialData): void;
    setRawData(arg0: number): void;
    getRawData(): number;
    isPlaced(): boolean;
    getBlockData(): BlockData;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): any;
    isLocked(): boolean;
    getLock(): string;
    setLock(arg0: string): void;
    getCustomName(): string;
    setCustomName(arg0: string): void;
    getSeed(): number;
    getLootTable(): LootTable;
    setSeed(arg0: number): void;
    setLootTable(arg0: LootTable): void;
}
export default class Barrel {
    static get $javaClass(): any;
}