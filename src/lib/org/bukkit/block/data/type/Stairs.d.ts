import Bisected from '../../../../../org/bukkit/block/data/Bisected.js';
import Bisected$Half from '../../../../../org/bukkit/block/data/Bisected$Half.js';
import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import BlockFace from '../../../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../../../org/bukkit/block/data/Directional.js';
import Material from '../../../../../org/bukkit/Material.js';
import Stairs$Shape from '../../../../../org/bukkit/block/data/type/Stairs$Shape.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Stairs extends Bisected, Directional, Waterlogged {
    getShape(): Stairs$Shape;
    setShape(arg0: Stairs$Shape): void;
    getHalf(): Bisected$Half;
    setHalf(arg0: Bisected$Half): void;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getFacing(): BlockFace;
    setFacing(arg0: BlockFace): void;
    getFaces(): any;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
}
export default class Stairs {
    static get $javaClass(): any;
}
