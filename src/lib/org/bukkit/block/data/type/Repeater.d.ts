import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Repeater extends Directional, Powerable {
    isLocked(): boolean;
    getMinimumDelay(): number;
    getMaximumDelay(): number;
    setLocked(arg0: boolean): void;
    getDelay(): number;
    setDelay(arg0: number): void;
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
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
}
export default class Repeater {
    static get $javaClass(): any;
}
