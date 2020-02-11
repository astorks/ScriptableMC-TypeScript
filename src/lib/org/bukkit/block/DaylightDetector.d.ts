import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import TileState from '../../../org/bukkit/block/TileState.js';
import World from '../../../org/bukkit/World.js';
export default interface DaylightDetector extends TileState {
    getPersistentDataContainer(): PersistentDataContainer;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    update(arg0: boolean): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    setData(arg0: MaterialData): void;
    setType(arg0: Material): void;
    getData(): MaterialData;
    getWorld(): World;
    getBlock(): Block;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    getBlockData(): BlockData;
    getZ(): number;
    getChunk(): Chunk;
    getY(): number;
    getX(): number;
    getRawData(): number;
    setRawData(arg0: number): void;
    isPlaced(): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    removeMetadata(arg0: string, arg1: Plugin): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    hasMetadata(arg0: string): boolean;
}
export default class DaylightDetector {
    static get $javaClass(): any;
}
