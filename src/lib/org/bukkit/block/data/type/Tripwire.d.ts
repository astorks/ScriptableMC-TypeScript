import Attachable from '../../../../../org/bukkit/block/data/Attachable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Tripwire extends Attachable, MultipleFacing, Powerable {
    setDisarmed(arg0: boolean): void;
    isDisarmed(): boolean;
    isAttached(): boolean;
    setAttached(arg0: boolean): void;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
    getFaces(): any;
    hasFace(arg0: BlockFace): boolean;
    getAllowedFaces(): any;
    setFace(arg0: BlockFace, arg1: boolean): void;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
}
export default class Tripwire {
    static get $javaClass(): any;
}
