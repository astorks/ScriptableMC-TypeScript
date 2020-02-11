import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Rails extends MaterialData {
    clone(): MaterialData;
    clone(): Rails;
    clone(): any;
    getDirection(): BlockFace;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isOnSlope(): boolean;
    isCurve(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Rails {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
