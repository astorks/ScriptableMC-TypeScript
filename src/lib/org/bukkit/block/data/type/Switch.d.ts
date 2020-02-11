import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
import Switch$Face from '../../../../../org/bukkit/block/data/type/Switch$Face.js';
export default interface Switch extends Directional, Powerable {
    getFace(): Switch$Face;
    setFace(arg0: Switch$Face): void;
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
    setPowered(arg0: boolean): void;
    isPowered(): boolean;
}
export default class Switch {
    static get $javaClass(): any;
}
