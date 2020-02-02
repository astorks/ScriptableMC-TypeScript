import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Rails from '../../../org/bukkit/material/Rails.js';
export default interface ExtendedRails extends Rails {
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isCurve(): boolean;
    clone(): MaterialData;
    clone(): any;
    clone(): Rails;
    clone(): ExtendedRails;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class ExtendedRails {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
