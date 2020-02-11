import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Scaffolding extends Waterlogged {
    getDistance(): number;
    setDistance(arg0: number): void;
    getMaximumDistance(): number;
    setBottom(arg0: boolean): void;
    isBottom(): boolean;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
    clone(): any;
    clone(): BlockData;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
    getMaterial(): Material;
    getAsString(): string;
    getAsString(arg0: boolean): string;
}
export default class Scaffolding {
    static get $javaClass(): any;
}
