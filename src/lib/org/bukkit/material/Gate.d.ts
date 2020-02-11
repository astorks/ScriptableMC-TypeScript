import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Openable from '../../../org/bukkit/material/Openable.js';
export default interface Gate extends MaterialData, Directional, Openable {
    clone(): MaterialData;
    clone(): any;
    clone(): Gate;
    isOpen(): boolean;
    getFacing(): BlockFace;
    setOpen(isOpen: boolean): void;
    setFacingDirection(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Gate {
    static get $javaClass(): any;
    constructor(data: number);
    constructor(type: Material, data: number);
    constructor();
}
