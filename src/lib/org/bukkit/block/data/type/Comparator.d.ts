import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Comparator$Mode from '../../../../../org/bukkit/block/data/type/Comparator$Mode.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Comparator extends Directional, Powerable {
    setMode(arg0: Comparator$Mode): void;
    getMode(): Comparator$Mode;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
}
export default class Comparator {
    static get $javaClass(): any;
}
