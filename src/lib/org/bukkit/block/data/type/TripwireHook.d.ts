import Attachable from '../../../../../org/bukkit/block/data/Attachable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface TripwireHook extends Attachable, Directional, Powerable {
    isAttached(): boolean;
    setAttached(arg0: boolean): void;
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
    setPowered(arg0: boolean): void;
    isPowered(): boolean;
}
export default class TripwireHook {
    static get $javaClass(): any;
}
