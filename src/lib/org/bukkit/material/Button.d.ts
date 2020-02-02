import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface Button extends SimpleAttachableMaterialData, Redstone {
    clone(): any;
    clone(): Button;
    clone(): SimpleAttachableMaterialData;
    clone(): MaterialData;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    isPowered(): boolean;
    setPowered(bool: boolean): void;
    getFacing(): BlockFace;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Button {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
