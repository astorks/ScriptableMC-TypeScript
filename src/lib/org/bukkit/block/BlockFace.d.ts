import Vector from '../../../org/bukkit/util/Vector.js';
export default interface BlockFace {
    getDirection(): Vector;
    getModX(): number;
    getModY(): number;
    getModZ(): number;
    getOppositeFace(): BlockFace;
    name(): string;
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    ordinal(): number;
}
export default class BlockFace {
    static get $javaClass(): any;
    static get NORTH(): BlockFace;
    static get EAST(): BlockFace;
    static get SOUTH(): BlockFace;
    static get WEST(): BlockFace;
    static get UP(): BlockFace;
    static get DOWN(): BlockFace;
    static get NORTH_EAST(): BlockFace;
    static get NORTH_WEST(): BlockFace;
    static get SOUTH_EAST(): BlockFace;
    static get SOUTH_WEST(): BlockFace;
    static get WEST_NORTH_WEST(): BlockFace;
    static get NORTH_NORTH_WEST(): BlockFace;
    static get NORTH_NORTH_EAST(): BlockFace;
    static get EAST_NORTH_EAST(): BlockFace;
    static get EAST_SOUTH_EAST(): BlockFace;
    static get SOUTH_SOUTH_EAST(): BlockFace;
    static get SOUTH_SOUTH_WEST(): BlockFace;
    static get WEST_SOUTH_WEST(): BlockFace;
    static get SELF(): BlockFace;
}
