import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ExtendedRails from '../../../org/bukkit/material/ExtendedRails.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Rails from '../../../org/bukkit/material/Rails.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface PoweredRail extends ExtendedRails, Redstone {
    isPowered(): boolean;
    setPowered(isPowered: boolean): void;
    clone(): MaterialData;
    clone(): any;
    clone(): Rails;
    clone(): ExtendedRails;
    clone(): PoweredRail;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isCurve(): boolean;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class PoweredRail {
    static get $javaClass(): any;
    constructor();
    constructor(type: Material, data: number);
    constructor(type: Material);
}
