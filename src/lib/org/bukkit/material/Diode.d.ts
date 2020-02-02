import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import Directional from '../../../org/bukkit/material/Directional.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import Redstone from '../../../org/bukkit/material/Redstone.js';
export default interface Diode extends MaterialData, Directional, Redstone {
    getFacing(): BlockFace;
    setFacingDirection(face: BlockFace): void;
    isPowered(): boolean;
    getDelay(): number;
    setDelay(delay: number): void;
    clone(): any;
    clone(): Diode;
    clone(): MaterialData;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Diode {
    static get $javaClass(): any;
    constructor(facingDirection: BlockFace, delay: number);
    constructor();
    constructor(facingDirection: BlockFace);
    constructor(facingDirection: BlockFace, delay: number, state: boolean);
    constructor(type: Material, data: number);
    constructor(type: Material);
}
