import BlockFace from '../../../org/bukkit/block/BlockFace.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import MushroomBlockTexture from '../../../org/bukkit/material/types/MushroomBlockTexture.js';
export default interface Mushroom extends MaterialData {
    clone(): Mushroom;
    clone(): MaterialData;
    clone(): any;
    isStem(): boolean;
    setStem(): void;
    setBlockTexture(texture: MushroomBlockTexture): void;
    setFacePainted(face: BlockFace, painted: boolean): void;
    getPaintedFaces(): any;
    getBlockTexture(): MushroomBlockTexture;
    isFacePainted(face: BlockFace): boolean;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Mushroom {
    static get $javaClass(): any;
    constructor(shroom: Material, data: number);
    constructor(shroom: Material, texture: MushroomBlockTexture);
    constructor(shroom: Material, capFace: BlockFace);
    constructor(shroom: Material);
}
