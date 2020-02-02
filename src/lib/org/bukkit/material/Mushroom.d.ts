import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MushroomBlockTexture from '../../../org/bukkit/material/types/MushroomBlockTexture.js';
export default interface Mushroom extends MaterialData {
    clone(): Mushroom;
    clone(): MaterialData;
    clone(): any;
    setFacePainted(face: BlockFace, painted: boolean): void;
    getBlockTexture(): MushroomBlockTexture;
    setStem(): void;
    getPaintedFaces(): any;
    isStem(): boolean;
    setBlockTexture(texture: MushroomBlockTexture): void;
    isFacePainted(face: BlockFace): boolean;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Mushroom {
    static get $javaClass(): any;
    constructor(shroom: Material, data: number);
    constructor(shroom: Material, texture: MushroomBlockTexture);
    constructor(shroom: Material, capFace: BlockFace);
    constructor(shroom: Material);
}
