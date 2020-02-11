import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Sign extends MaterialData, Attachable {
    clone(): MaterialData;
    clone(): Sign;
    clone(): any;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    isWallSign(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Sign {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
