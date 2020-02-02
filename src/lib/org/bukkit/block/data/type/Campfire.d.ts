import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Lightable from '../../../../../org/bukkit/block/data/Lightable.js';
import Material from '../../../../../org/bukkit/Material.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Campfire extends Directional, Lightable, Waterlogged {
    isSignalFire(): boolean;
    setSignalFire(arg0: boolean): void;
    getFacing(): BlockFace;
    getFaces(): any;
    setFacing(arg0: BlockFace): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    isLit(): boolean;
    setLit(arg0: boolean): void;
    isWaterlogged(): boolean;
    setWaterlogged(arg0: boolean): void;
}
export default class Campfire {
    static get $javaClass(): any;
}