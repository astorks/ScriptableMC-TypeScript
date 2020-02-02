import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Vine extends MaterialData {
    isOnFace(face: BlockFace): boolean;
    putOnFace(face: BlockFace): void;
    removeFromFace(face: BlockFace): void;
    clone(): Vine;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Vine {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor();
    constructor(data: number);
    constructor(faces: any);
    constructor(faces: Array<BlockFace>);
}
