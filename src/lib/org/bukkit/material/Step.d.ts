import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js';
export default interface Step extends TexturedMaterial {
    clone(): Step;
    clone(): TexturedMaterial;
    clone(): any;
    clone(): MaterialData;
    getTextures(): Array<Material>;
    isInverted(): boolean;
    setInverted(inv: boolean): void;
    getMaterial(): Material;
    setMaterial(material: Material): void;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
    setData(data: number): void;
    getData(): number;
}
export default class Step {
    static get $javaClass(): any;
    constructor(type: Material);
    constructor();
    constructor(type: Material, data: number);
}
