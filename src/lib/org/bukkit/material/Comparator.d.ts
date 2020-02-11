import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface Comparator extends MaterialData, Directional, Redstone {
    clone(): any;
    clone(): Comparator;
    clone(): MaterialData;
    getFacing(): BlockFace;
    isBeingPowered(): boolean;
    isSubtractionMode(): boolean;
    setSubtractionMode(isSubtraction: boolean): void;
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Comparator {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(facingDirection: BlockFace, isSubtraction: boolean, state: boolean);
    constructor(facingDirection: BlockFace, isSubtraction: boolean);
    constructor(type: Material, data: number);
    constructor();
    constructor(facingDirection: BlockFace);
}
