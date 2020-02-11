import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface TexturedMaterial extends MaterialData {
    clone(): any;
    clone(): TexturedMaterial;
    clone(): MaterialData;
    getMaterial(): Material;
    getTextures(): Array<Material>;
    setMaterial(material: Material): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class TexturedMaterial {
    static get $javaClass(): any;
    constructor(m: Material);
    constructor(type: Material, data: number);
}
