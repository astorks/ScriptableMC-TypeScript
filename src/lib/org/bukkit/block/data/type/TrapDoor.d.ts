import Bisected from '../../../../../org/bukkit/block/data/Bisected.js';
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Openable from '../../../../../org/bukkit/block/data/Openable.js';
import Powerable from '../../../../../org/bukkit/block/data/Powerable.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface TrapDoor extends Bisected, Directional, Openable, Powerable, Waterlogged {
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
    getFaces(): any;
    setFacing(arg0: BlockFace): void;
    isOpen(): boolean;
    setOpen(arg0: boolean): void;
    isPowered(): boolean;
    setPowered(arg0: boolean): void;
    isWaterlogged(): boolean;
    setWaterlogged(arg0: boolean): void;
}
export default class TrapDoor {
    static get $javaClass(): any;
}