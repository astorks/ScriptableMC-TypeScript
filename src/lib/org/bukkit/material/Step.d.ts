import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
import TexturedMaterial from '../../../org/bukkit/material/TexturedMaterial.js';
export default interface Step extends TexturedMaterial {
    isInverted(): boolean;
    setInverted(inv: boolean): void;
    getTextures(): Array<Material>;
    clone(): MaterialData;
    clone(): any;
    clone(): TexturedMaterial;
    clone(): Step;
    getMaterial(): Material;
    setMaterial(material: Material): void;
    getData(): number;
    setData(data: number): void;
    getItemType(): Material;
    toItemStack(): ItemStack;
    toItemStack(amount: number): ItemStack;
}
export default class Step {
    static get $javaClass(): any;
    constructor(type: Material, data: number);
    constructor();
    constructor(type: Material);
}
