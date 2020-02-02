import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Rails extends MaterialData {
    clone(): MaterialData;
    clone(): Rails;
    clone(): any;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    isCurve(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Rails {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
