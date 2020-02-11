import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Rails from '../../../org/bukkit/material/Rails.js';
export default interface ExtendedRails extends Rails {
    clone(): Rails;
    clone(): ExtendedRails;
    clone(): any;
    clone(): MaterialData;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isCurve(): boolean;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class ExtendedRails {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
