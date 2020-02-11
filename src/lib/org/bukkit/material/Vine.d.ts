import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Vine extends MaterialData {
    clone(): any;
    clone(): Vine;
    clone(): MaterialData;
    isOnFace(face: BlockFace): boolean;
    removeFromFace(face: BlockFace): void;
    putOnFace(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class Vine {
    static get $javaClass(): any;
    constructor(faces: Array<BlockFace>);
    constructor(data: number);
    constructor(type: Material, data: number);
    constructor();
    constructor(faces: any);
}
