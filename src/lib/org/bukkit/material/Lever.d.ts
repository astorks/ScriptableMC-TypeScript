import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface Lever extends SimpleAttachableMaterialData, Redstone {
    getAttachedFace(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isPowered(): boolean;
    setPowered(isPowered: boolean): void;
    clone(): MaterialData;
    clone(): Lever;
    clone(): any;
    clone(): SimpleAttachableMaterialData;
    getFacing(): BlockFace;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Lever {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor();
    constructor(type: Material, data: number);
}
