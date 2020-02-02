import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js';
import FurnaceAndDispenser from '../../../org/bukkit/material/FurnaceAndDispenser.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Dispenser extends FurnaceAndDispenser {
    clone(): any;
    clone(): FurnaceAndDispenser;
    clone(): MaterialData;
    clone(): DirectionalContainer;
    clone(): Dispenser;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Dispenser {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor(direction: BlockFace);
    constructor();
}
