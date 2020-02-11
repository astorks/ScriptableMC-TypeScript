import Ageable from '../../../../../org/bukkit/block/data/Ageable.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Material from '../../../../../org/bukkit/Material.js';
import MultipleFacing from '../../../../../org/bukkit/block/data/MultipleFacing.js';
export default interface Fire extends Ageable, MultipleFacing {
    getAge(): number;
    setAge(arg0: number): void;
    getMaximumAge(): number;
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
}
export default class Fire {
    static get $javaClass(): any;
}
