import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Sign extends MaterialData, Attachable {
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isWallSign(): boolean;
    clone(): any;
    clone(): Sign;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Sign {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material);
    constructor(type: Material, data: number);
}
