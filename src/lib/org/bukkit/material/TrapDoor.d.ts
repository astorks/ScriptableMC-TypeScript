import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Openable from '../../../org/bukkit/material/Openable.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface TrapDoor extends SimpleAttachableMaterialData, Openable {
    getAttachedFace(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isInverted(): boolean;
    setInverted(inv: boolean): void;
    setOpen(isOpen: boolean): void;
    clone(): any;
    clone(): MaterialData;
    clone(): SimpleAttachableMaterialData;
    clone(): TrapDoor;
    isOpen(): boolean;
    getFacing(): BlockFace;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class TrapDoor {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
    constructor(type: Material);
}
