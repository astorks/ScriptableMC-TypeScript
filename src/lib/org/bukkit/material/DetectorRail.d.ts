import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ExtendedRails from '../../../org/bukkit/material/ExtendedRails.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import PressureSensor from '../../../org/bukkit/material/PressureSensor.js';
import Rails from '../../../org/bukkit/material/Rails.js';
export default interface DetectorRail extends ExtendedRails, PressureSensor {
    clone(): ExtendedRails;
    clone(): any;
    clone(): MaterialData;
    clone(): Rails;
    clone(): DetectorRail;
    isPressed(): boolean;
    setPressed(isPressed: boolean): void;
    setDirection(face: BlockFace, isOnSlope: boolean): void;
    isCurve(): boolean;
    getDirection(): BlockFace;
    isOnSlope(): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class DetectorRail {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor(type: Material);
    constructor();
}
