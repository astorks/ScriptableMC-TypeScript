import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Metadatable from '../../../org/bukkit/metadata/Metadatable.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import World from '../../../org/bukkit/World.js';
export default interface BlockState extends Metadatable {
    update(arg0: boolean): boolean;
    update(arg0: boolean, arg1: boolean): boolean;
    update(): boolean;
    getLocation(): Location;
    getLocation(arg0: Location): Location;
    getType(): Material;
    getWorld(): World;
    getBlock(): Block;
    getLightLevel(): number;
    setBlockData(arg0: BlockData): void;
    getChunk(): Chunk;
    getX(): number;
    getY(): number;
    getZ(): number;
    setData(arg0: MaterialData): void;
    getData(): MaterialData;
    setType(arg0: Material): void;
    getBlockData(): BlockData;
    setRawData(arg0: number): void;
    getRawData(): number;
    isPlaced(): boolean;
    setMetadata(arg0: string, arg1: MetadataValue): void;
    getMetadata(arg0: string): Array<MetadataValue>;
    removeMetadata(arg0: string, arg1: Plugin): void;
    hasMetadata(arg0: string): boolean;
}
export default class BlockState {
    static get $javaClass(): any;
}
