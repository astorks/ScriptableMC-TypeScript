import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface Diode extends MaterialData, Directional, Redstone {
    clone(): any;
    clone(): Diode;
    clone(): MaterialData;
    getFacing(): BlockFace;
    isPowered(): boolean;
    setFacingDirection(face: BlockFace): void;
    setDelay(delay: number): void;
    getDelay(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Diode {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor(facingDirection: BlockFace, delay: number, state: boolean);
    constructor(facingDirection: BlockFace, delay: number);
    constructor(type: Material, data: number);
    constructor();
    constructor(facingDirection: BlockFace);
}
