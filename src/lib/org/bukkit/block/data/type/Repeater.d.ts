import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
export default interface Repeater extends Directional, Powerable {
    isLocked(): boolean;
    setLocked(arg0: boolean): void;
    setDelay(arg0: number): void;
    getDelay(): number;
    getMaximumDelay(): number;
    getMinimumDelay(): number;
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
export default class Repeater {
    static get $javaClass(): any;
}