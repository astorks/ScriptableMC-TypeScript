import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Rails extends MaterialData {
    getDirection(): BlockFace;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isOnSlope(): boolean;
    isCurve(): boolean;
    clone(): Rails;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Rails {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
    constructor(type: Material);
}
