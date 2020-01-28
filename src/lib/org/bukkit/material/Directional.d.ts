import { BlockFace } from '../../../org/bukkit/block/BlockFace.js';
export interface Directional {
    getFacing(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export declare class Directional {
    static get $javaClass(): any;
}
