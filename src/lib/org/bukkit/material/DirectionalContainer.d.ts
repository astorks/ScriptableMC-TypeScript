import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface DirectionalContainer extends MaterialData, Directional {
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    clone(): DirectionalContainer;
    clone(): any;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class DirectionalContainer {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
