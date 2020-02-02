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
    setFacingDirection(face: BlockFace): void;
    getDescendingDirection(): BlockFace;
    getAscendingDirection(): BlockFace;
    setInverted(inv: boolean): void;
    isInverted(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Stairs {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}