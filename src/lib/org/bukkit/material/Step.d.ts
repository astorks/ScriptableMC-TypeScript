import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js';
export default interface Step extends TexturedMaterial {
    clone(): Step;
    clone(): TexturedMaterial;
    clone(): any;
    clone(): MaterialData;
    getTextures(): any;
    setInverted(inv: boolean): void;
    isInverted(): boolean;
    getMaterial(): Material;
    setMaterial(material: Material): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
}
export default class Step {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor();
    constructor(type: Material, data: number);
}
