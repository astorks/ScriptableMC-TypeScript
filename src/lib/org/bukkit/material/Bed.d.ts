import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Bed extends MaterialData, Directional {
    clone(): any;
    clone(): Bed;
    clone(): MaterialData;
    getFacing(): BlockFace;
    setHeadOfBed(isHeadOfBed: boolean): void;
    isHeadOfBed(): boolean;
    setFacingDirection(face: BlockFace): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Bed {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(direction: BlockFace);
    constructor();
}
