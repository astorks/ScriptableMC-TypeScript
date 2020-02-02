import Attachable from '../../../org/bukkit/material/Attachable.js';
import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import CocoaPlant$CocoaPlantSize from '../../../org/bukkit/material/CocoaPlant$CocoaPlantSize.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface CocoaPlant extends MaterialData, Directional, Attachable {
    getFacing(): BlockFace;
    getAttachedFace(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    clone(): MaterialData;
    clone(): any;
    clone(): CocoaPlant;
    getSize(): CocoaPlant$CocoaPlantSize;
    setSize(sz: CocoaPlant$CocoaPlantSize): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class CocoaPlant {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(sz: CocoaPlant$CocoaPlantSize);
    constructor(sz: CocoaPlant$CocoaPlantSize, dir: BlockFace);
    constructor();
}
