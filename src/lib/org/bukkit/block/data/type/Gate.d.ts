import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Openable from '../../../../../org/bukkit/block/data/Openable.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Gate extends Directional, Openable, Powerable {
    isInWall(): boolean;
    setInWall(arg0: boolean): void;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    setOpen(arg0: boolean): void;
    isOpen(): boolean;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
}
export default class Gate {
    static get $javaClass(): any;
}
