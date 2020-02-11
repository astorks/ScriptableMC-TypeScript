import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface SimpleAttachableMaterialData extends MaterialData, Attachable {
    clone(): any;
    clone(): SimpleAttachableMaterialData;
    clone(): MaterialData;
    getFacing(): BlockFace;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
    getAttachedFace(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export default class SimpleAttachableMaterialData {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(type: Material, direction: BlockFace);
}
