import Block from '../../../org/bukkit/block/Block.js';
import BlockData from '../../../org/bukkit/block/data/BlockData.js';
import BlockVector from '../../../org/bukkit/util/BlockVector.js';
import Chunk from '../../../org/bukkit/Chunk.js';
import LivingEntity from '../../../org/bukkit/entity/LivingEntity.js';
import Location from '../../../org/bukkit/Location.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MetadataValue from '../../../org/bukkit/metadata/MetadataValue.js';
import Mirror from '../../../org/bukkit/block/structure/Mirror.js';
import PersistentDataContainer from '../../../org/bukkit/persistence/PersistentDataContainer.js';
import Plugin from '../../../org/bukkit/plugin/Plugin.js';
import StructureRotation from '../../../org/bukkit/block/structure/StructureRotation.js';
import TileState from '../../../org/bukkit/block/TileState.js';
import UsageMode from '../../../org/bukkit/block/structure/UsageMode.js';
import World from '../../../org/bukkit/World.js';
export default interface Structure extends TileState {
    getSeed(): number;
    setRotation(arg0: StructureRotation): void;
    setMetadata(arg0: string): void;
    getMetadata(): string;
    setSeed(arg0: number): void;
    isShowAir(): boolean;
    getStructureName(): string;
    setStructureName(arg0: string): void;
    setShowAir(arg0: boolean): void;
    isIgnoreEntities(): boolean;
    getIntegrity(): number;
    setStructureSize(arg0: BlockVector): void;
    getStructureSize(): BlockVector;
    setIntegrity(arg0: number): void;
    setIgnoreEntities(arg0: boolean): void;
    setUsageMode(arg0: UsageMode): void;
    getUsageMode(): UsageMode;
    setMirror(arg0: Mirror): void;
    getMirror(): Mirror;
    getRotation(): StructureRotation;
    setRelativePosition(arg0: BlockVector): void;
    setBoundingBoxVisible(arg0: boolean): void;
    isBoundingBoxVisible(): boolean;
    getRelativePosition(): BlockVector;
    getAuthor(): string;
    setAuthor(arg0: LivingEntity): void;
    setAuthor(arg0: string): void;
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
}
export default class Structure {
    static get $javaClass(): any;
}
