import { PersistentDataContainer } from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import { Block } from '../../../org/bukkit/block/Block.js';
import { World } from '../../../org/bukkit/World.js';
import { MaterialData } from '../../../org/bukkit/material/MaterialData.js';
import { Material } from '../../../org/bukkit/Material.js';
import { Chunk } from '../../../org/bukkit/Chunk.js';
import { BlockData } from '../../../org/bukkit/block/data/BlockData.js';
import { Location } from '../../../org/bukkit/Location.js';
import { MetadataValue } from '../../../org/bukkit/metadata/MetadataValue.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { BlockState } from '../../../org/bukkit/block/BlockState.js';
import { PersistentDataHolder } from '../../../org/bukkit/persistence/PersistentDataHolder.js';
export interface TileState extends BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
    getBlock(): Block;
    getWorld(): World;
    getData(): MaterialData;
    setType(arg0: Material): void;
    setData(arg0: MaterialData): void;
    getChunk(): Chunk;
    getX(): number;
    getY(): number;
    getZ(): number;
    getBlockData(): BlockData;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    getRawData(): number;
    setRawData(arg0: number): void;
    isPlaced(): boolean;
    update(arg0: boolean, arg1: boolean): boolean;
    update(arg0: boolean): boolean;
    update(): boolean;
    getLocation(arg0: Location): Location;
    getLocation(): Location;
    getType(): Material;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): any;
    hasMetadata(arg0: string): boolean;
    removeMetadata(arg0: string, arg1: Plugin): void;
}
export declare class TileState {
    static get $javaClass(): any;
}
