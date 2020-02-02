import BlockData from '../../../../../org/bukkit/block/data/BlockData.js';
import Material from '../../../../../org/bukkit/Material.js';
import Waterlogged from '../../../../../org/bukkit/block/data/Waterlogged.js';
export default interface Scaffolding extends Waterlogged {
    setDistance(arg0: number): void;
    getDistance(): number;
    getMaximumDistance(): number;
    isBottom(): boolean;
    setBottom(arg0: boolean): void;
    setWaterlogged(arg0: boolean): void;
    isWaterlogged(): boolean;
    getMaterial(): Material;
    getAsString(arg0: boolean): string;
    getAsString(): string;
    clone(): BlockData;
    clone(): any;
    matches(arg0: BlockData): boolean;
    merge(arg0: BlockData): BlockData;
}
export default class Scaffolding {
    static get $javaClass(): any;
}
