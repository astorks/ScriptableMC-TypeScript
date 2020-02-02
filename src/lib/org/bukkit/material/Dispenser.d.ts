import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import DirectionalContainer from '../../../org/bukkit/material/DirectionalContainer.js';
import FurnaceAndDispenser from '../../../org/bukkit/material/FurnaceAndDispenser.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface Dispenser extends FurnaceAndDispenser {
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    clone(): MaterialData;
    clone(): DirectionalContainer;
    clone(): Dispenser;
    clone(): any;
    clone(): FurnaceAndDispenser;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Dispenser {
    static get $javaClass(): any;
    constructor();
    constructor(direction: BlockFace);
    constructor(type: Material);
    constructor(type: Material, data: number);
}
