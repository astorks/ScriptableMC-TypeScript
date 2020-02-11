import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface FurnaceAndDispenser extends DirectionalContainer {
    clone(): any;
    clone(): MaterialData;
    clone(): DirectionalContainer;
    clone(): FurnaceAndDispenser;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class FurnaceAndDispenser {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
