import { PersistentDataContainer } from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import { Location } from '../../../org/bukkit/Location.js';
import { Material } from '../../../org/bukkit/Material.js';
import { Block } from '../../../org/bukkit/block/Block.js';
import { World } from '../../../org/bukkit/World.js';
import { MaterialData } from '../../../org/bukkit/material/MaterialData.js';
import { Chunk } from '../../../org/bukkit/Chunk.js';
import { BlockData } from '../../../org/bukkit/block/data/BlockData.js';
import { MetadataValue } from '../../../org/bukkit/metadata/MetadataValue.js';
import { Plugin } from '../../../org/bukkit/plugin/Plugin.js';
import { BlockState } from '../../../org/bukkit/block/BlockState.js';
import { PersistentDataHolder } from '../../../org/bukkit/persistence/PersistentDataHolder.js';
export interface TileState extends BlockState, PersistentDataHolder {
    getPersistentDataContainer(): PersistentDataContainer;
    update(arg0: boolean): boolean;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    getBlock(): Block;
    getWorld(): World;
    getData(): MaterialData;
    setData(arg0: MaterialData): void;
    setType(arg0: Material): void;
    getX(): number;
    getY(): number;
    getZ(): number;
    getChunk(): Chunk;
    getBlockData(): BlockData;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    isPlaced(): boolean;
    setRawData(arg0: number): void;
    getRawData(): number;
    hasMetadata(arg0: string): boolean;
    getMetadata(arg0: string): any;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
}
export declare class TileState {
    static get $javaClass(): any;
}
