import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Stairs extends MaterialData, Directional {
    clone(): MaterialData;
    clone(): Stairs;
    clone(): any;
    getFacing(): BlockFace;
    setInverted(inv: boolean): void;
    isInverted(): boolean;
    getDescendingDirection(): BlockFace;
    getAscendingDirection(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Stairs {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
