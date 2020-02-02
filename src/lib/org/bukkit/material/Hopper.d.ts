import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface Hopper extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isPowered(): boolean;
    setActive(isActive: boolean): void;
    isActive(): boolean;
    clone(): Hopper;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Hopper {
    static get $javaClass(): any;
    constructor();
    constructor(facingDirection: BlockFace);
    constructor(facingDirection: BlockFace, isActive: boolean);
    constructor(type: Material);
    constructor(type: Material, data: number);
}
