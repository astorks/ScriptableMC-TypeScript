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
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    isBeingPowered(): boolean;
    setSubtractionMode(isSubtraction: boolean): void;
    isSubtractionMode(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
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
