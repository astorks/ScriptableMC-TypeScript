import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface PistonExtensionMaterial extends MaterialData, Attachable {
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isSticky(): boolean;
    setSticky(sticky: boolean): void;
    clone(): MaterialData;
    clone(): any;
    clone(): PistonExtensionMaterial;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PistonExtensionMaterial {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
