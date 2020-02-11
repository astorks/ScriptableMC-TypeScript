import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface PistonBaseMaterial extends MaterialData, Directional, Redstone {
    clone(): PistonBaseMaterial;
    clone(): MaterialData;
    clone(): any;
    getFacing(): BlockFace;
    setPowered(powered: boolean): void;
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    isSticky(): boolean;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class PistonBaseMaterial {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(type: Material, data: number);
}
