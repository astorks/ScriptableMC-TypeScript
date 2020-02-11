import EntityType from '../../../org/bukkit/entity/EntityType.js';
import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
import MaterialData from '../../../org/bukkit/material/MaterialData.js';
export default interface SpawnEgg extends MaterialData {
    clone(): SpawnEgg;
    clone(): MaterialData;
    clone(): any;
    getSpawnedType(): EntityType;
    setSpawnedType(type: EntityType): void;
    setData(data: number): void;
    getData(): number;
    toItemStack(amount: number): ItemStack;
    toItemStack(): ItemStack;
    getItemType(): Material;
}
export default class SpawnEgg {
    static get $javaClass(): any;
    constructor(type: EntityType);
    constructor(data: number);
    constructor(type: Material, data: number);
    constructor();
}
