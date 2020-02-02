import BlockFace from '../../../org/bukkit/block/BlockFace.js';
export default interface Directional {
    getFacing(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export default class Directional {
    static get $javaClass(): any;
}
