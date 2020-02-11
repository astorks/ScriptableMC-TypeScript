import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js';
export default interface MonsterEggs extends TexturedMaterial {
    clone(): any;
    clone(): TexturedMaterial;
    clone(): MonsterEggs;
    clone(): MaterialData;
    getTextures(): Array<Material>;
    getMaterial(): Material;
    setMaterial(material: Material): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class MonsterEggs {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor();
    constructor(type: Material, data: number);
}
