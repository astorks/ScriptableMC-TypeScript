import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface SimpleAttachableMaterialData extends MaterialData, Attachable {
    getFacing(): BlockFace;
    clone(): SimpleAttachableMaterialData;
    clone(): MaterialData;
    clone(): any;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
    getAttachedFace(): BlockFace;
    setFacingDirection(arg0: BlockFace): void;
}
export default class SimpleAttachableMaterialData {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(type: Material, direction: BlockFace);
}
