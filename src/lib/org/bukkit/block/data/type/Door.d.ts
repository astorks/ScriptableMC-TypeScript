import Bisected from '../../../../../org/bukkit/block/data/Bisected.js';
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Door$Hinge from '../../../../../org/bukkit/block/data/type/Door$Hinge.js';
import Material from '../../../../../org/bukkit/Material.js';
import Openable from '../../../../../org/bukkit/block/data/Openable.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Door extends Bisected, Directional, Openable, Powerable {
    setHinge(arg0: Door$Hinge): void;
    getHinge(): Door$Hinge;
    getHalf(): Bisected$Half;
    setHalf(arg0: Bisected$Half): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    isOpen(): boolean;
    setOpen(arg0: boolean): void;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
}
export default class Door {
    static get $javaClass(): any;
}
