import { BlockFace } from '../../../org/bukkit/block/BlockFace.js';
import { Directional } from '../../../org/bukkit/material/Directional.js';
export interface Attachable extends Directional {
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export declare class Attachable {
    static get $javaClass(): any;
}
