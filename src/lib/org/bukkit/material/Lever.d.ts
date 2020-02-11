import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface Lever extends SimpleAttachableMaterialData, Redstone {
    clone(): any;
    clone(): Lever;
    clone(): SimpleAttachableMaterialData;
    clone(): MaterialData;
    setPowered(isPowered: boolean): void;
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Lever {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
