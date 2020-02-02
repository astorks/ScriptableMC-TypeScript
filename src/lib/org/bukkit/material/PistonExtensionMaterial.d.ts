import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface PistonExtensionMaterial extends MaterialData, Attachable {
    clone(): PistonExtensionMaterial;
    clone(): MaterialData;
    clone(): any;
    getFacing(): BlockFace;
    setSticky(sticky: boolean): void;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    isSticky(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class PistonExtensionMaterial {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}