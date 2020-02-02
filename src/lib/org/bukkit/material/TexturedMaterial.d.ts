import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface TexturedMaterial extends MaterialData {
    clone(): any;
    clone(): TexturedMaterial;
    clone(): MaterialData;
    getMaterial(): Material;
    setMaterial(material: Material): void;
    getTextures(): any;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class TexturedMaterial {
    static get $javaClass(): any;
    constructor(m: Material);
    constructor(type: Material, data: number);
}
