import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import CocoaPlant$CocoaPlantSize from '../../../org/bukkit/material/CocoaPlant$CocoaPlantSize.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface CocoaPlant extends MaterialData, Directional, Attachable {
    clone(): CocoaPlant;
    clone(): any;
    clone(): MaterialData;
    getSize(): CocoaPlant$CocoaPlantSize;
    setSize(sz: CocoaPlant$CocoaPlantSize): void;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    getAttachedFace(): BlockFace;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class CocoaPlant {
    static get $javaClass(): any;
    constructor(sz: CocoaPlant$CocoaPlantSize, dir: BlockFace);
    constructor(sz: CocoaPlant$CocoaPlantSize);
    constructor(type: Material, data: number);
    constructor();
}
