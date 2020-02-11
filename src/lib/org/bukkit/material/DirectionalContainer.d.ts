import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface DirectionalContainer extends MaterialData, Directional {
    clone(): DirectionalContainer;
    clone(): any;
    clone(): MaterialData;
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class DirectionalContainer {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
