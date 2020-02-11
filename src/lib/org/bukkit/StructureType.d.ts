import MapCursor$Type from '../../org/bukkit/map/MapCursor$Type.js';
export default interface StructureType {
    getName(): string;
    getMapIcon(): MapCursor$Type;
}
export default class StructureType {
    static get $javaClass(): any;
    static get MINESHAFT(): StructureType;
    static get VILLAGE(): StructureType;
    static get NETHER_FORTRESS(): StructureType;
    static get STRONGHOLD(): StructureType;
    static get JUNGLE_PYRAMID(): StructureType;
    static get OCEAN_RUIN(): StructureType;
    static get DESERT_PYRAMID(): StructureType;
    static get IGLOO(): StructureType;
    static get SWAMP_HUT(): StructureType;
    static get OCEAN_MONUMENT(): StructureType;
    static get END_CITY(): StructureType;
    static get WOODLAND_MANSION(): StructureType;
    static get BURIED_TREASURE(): StructureType;
    static get SHIPWRECK(): StructureType;
    static get PILLAGER_OUTPOST(): StructureType;
    static getStructureTypes(): any;
}
