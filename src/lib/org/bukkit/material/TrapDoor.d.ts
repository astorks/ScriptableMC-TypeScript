import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Openable from '../../../org/bukkit/material/Openable.js';
import SimpleAttachableMaterialData from '../../../org/bukkit/material/SimpleAttachableMaterialData.js';
export default interface TrapDoor extends SimpleAttachableMaterialData, Openable {
    clone(): TrapDoor;
    clone(): MaterialData;
    clone(): any;
    clone(): SimpleAttachableMaterialData;
    isOpen(): boolean;
    setInverted(inv: boolean): void;
    isInverted(): boolean;
    setOpen(isOpen: boolean): void;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    getFacing(): BlockFace;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class TrapDoor {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
