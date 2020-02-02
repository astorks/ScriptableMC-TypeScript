import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface TexturedMaterial extends MaterialData {
    getMaterial(): Material;
    setMaterial(material: Material): void;
    getTextures(): Array<Material>;
    clone(): MaterialData;
    clone(): any;
    clone(): TexturedMaterial;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class TexturedMaterial {
    static get $javaClass(): any;
    constructor(m: Material);
    constructor(type: Material, data: number);
}
